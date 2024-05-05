import React from 'react';

function sidebarleft() {
    return (
        <>
            <div className="sideleft p-3">
                <div className='logo'>
                    <img src="/weekend-img/logo-small.08826abd.png" alt="Background" height="50px" width="50px" />
                </div>
                <div className=''>
                    <div className='get-jobs'>
                        <span className='get-job m-0'>Get Jobs</span>
                        <div><img src="/weekend-img/user.png" alt="user" height="20px" width="20px" /></div>
                        <div><img src="/weekend-img/search.png" alt="search" height="20px" width="20px" /></div>
                        <div><img src="/weekend-img/rupee.png" alt="rupee" height="20px" width="20px" /></div>
                        <div><img src="/weekend-img/add-user.png" alt="add-user" height="20px" width="20px" /></div>
                    </div>
                    <div className='underline'></div>
                    <div className='get-refer'>
                    <span className='get-job'>Refer</span>
                        <div><img src="/weekend-img/like.png" alt="like" height="20px" width="20px" /></div>
                        <div><img src="/weekend-img/newspaper.png" alt="newspaper" height="20px" width="20px" /></div>
                        <div><img src="/weekend-img/share.png" alt="share" height="20px" width="20px" /></div>
                        <div><img src="/weekend-img/useracc.png" alt="useracc" height="40px" width="40px" /></div>
                    </div>
                </div>
                <div className=''>
                </div>
            </div>
        </>
    );
}

export default sidebarleft;
