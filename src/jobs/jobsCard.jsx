import React, { useState, useEffect } from 'react';

function JobsCard() {
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
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
                setJobData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
        return () => { };
    }, []);

    console.log(jobData)

    return (
        <>
            <div className='job-head'>Job Search</div>
            <div className='row' style={{justifyContent: 'space-evenly'}}>
            {jobData && jobData.jdList && jobData.jdList.length > 0 ? (
                jobData.jdList.map((job, index) => (
                    <div key={index} className='col-3 job-card'>
                        <div>
                            <span>Job title: {job.jobRole}</span>
                        </div>
                        <div>
                            <span>Company name: {job.companyName}</span>
                        </div>
                        <div>
                            <span>Location: {job.location}</span>
                        </div>
                        <div>
                            <span>Job description: {job.jobDetailsFromCompany}</span>
                        </div>
                        <div>
                            <span>Experience required: {job.minExp} - {job.maxExp} years</span>
                        </div>
                        <div className='apply'>
                            <button>Apply</button>
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
            </div>
        </>
    );
}

export default JobsCard;
