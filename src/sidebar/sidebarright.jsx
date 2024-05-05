import React from 'react';

function sidebarright() {
  return (
    <>
    <div className="sideright p-1">
        <div className='Userlogo'>
            <img src="/weekend-img/useracc.png" alt="Background" height="50px" width="50px" />
        </div>
        <div className='underline'></div>
        <div className='mt-3'>
        <div className='useredit'><img src="/weekend-img/pencil.png" alt="user" height="20px" width="20px" /></div>
            <div className='profile'>
                <span className='edit-user m-0'>Edit Profile</span>
            </div>
        </div>
        <div className=''>
        </div>
    </div>
</>
  );
}

export default sidebarright;
