import React, { useState, useEffect } from 'react';

function JobsCard() {
    const [jobData, setJobData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [filters, setFilters] = useState({
        role: 'All',
        company: 'All',
        location: 'All',
    });
    const [filteredData, setFilteredData] = useState([]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
            if (!response.ok) {
                throw new Error('Network error');
            }
            const data = await response.json();
            setJobData(prevData => [...prevData, ...data.jdList]);
            setIsLoading(false);
            if (data.jdList.length === 0) {
                setHasMore(false); // No more data available
            }
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight &&
            !isLoading &&
            hasMore
        ) {
            fetchData(); // Fetch more data
        }
    };

    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    useEffect(() => {
        fetchData(); // Initial fetch
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const filteredJobs = jobData.filter(job =>
            (filters.role === 'All' || job.jobRole === filters.role) &&
            (filters.company === 'All' || job.companyName === filters.company) &&
            (filters.location === 'All' || job.location === filters.location)
        );
        setFilteredData(filteredJobs);
    }, [filters, jobData]);

    return (
        <>
            <div className='job-head'>Job Search</div>
            <div className='filter-container'>
                <label htmlFor='roleFilter'>Filter by Role:</label>
                <select id='roleFilter' value={filters.role} onChange={(e) => handleFilterChange('role', e.target.value)}>
                    <option value='All'>All</option>
                    <option value='frontend'>Frontend Developer</option>
                    <option value='ios'>iOS Developer</option>
                    <option value='android'>Android Developer</option>
                    <option value='tech lead'>Tech Lead</option>
                    <option value='backend'>Backend Developer</option>
                </select>
                <label htmlFor='companyFilter'>Filter by Company:</label>
                <select id='companyFilter' value={filters.company} onChange={(e) => handleFilterChange('company', e.target.value)}>
                    <option value='All'>All</option>
                    <option value='Dropbox'>Dropbox</option>
                    <option value='LG'>LG</option>
                    <option value='Sony'>Sony</option>
                    <option value='Adobe Systems'>Adobe Systems</option>
                    <option value='HP'>HP</option>
                    <option value='eBay'>eBay</option>
                    {/* Add more options for different companies */}
                </select>
                <label htmlFor='locationFilter'>Filter by Location:</label>
                <select id='locationFilter' value={filters.location} onChange={(e) => handleFilterChange('location', e.target.value)}>
                    <option value='All'>All</option>
                    <option value='delhi ncr'>delhi</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='remote'>Remote</option>
                    <option value='chennai'>chennai</option>
                    <option value='bangalore'>Bangalore</option>
                    {/* Add more options for different locations */}
                </select>
            </div>
            <div className='row' style={{ justifyContent: 'space-evenly' }}>
                {filteredData.length > 0 ? (
                    filteredData.map((job, index) => (
                        <div key={index} className='col-3 job-card'>
                            <div>
                                <span>Job title:<span className='details'>{job.jobRole}</span></span>
                            </div>
                            <div>
                                <span>Company name: <span className='details'>{job.companyName}</span></span>
                            </div>
                            <div>
                                <span>Location: <span className='details'>{job.location}</span></span>
                            </div>
                            <div>
                                <span>Job description: <span className='details'>{job.jobDetailsFromCompany}</span></span>
                            </div>
                            <div>
                                <span>Experience required: <span className='details'>{job.minExp} - {job.maxExp} years</span></span>
                            </div>
                            <div className='apply'>
                                <button>Apply</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No jobs matching the selected filters.</div>
                )}
                {isLoading && <div>Loading more...</div>}
                {!hasMore && <div>No more jobs to load.</div>}
            </div>
        </>
    );
}

export default JobsCard;
