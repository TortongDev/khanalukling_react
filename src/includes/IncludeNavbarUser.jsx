function IncludeNavbar()
{
    return (
        <>
            <nav className="wrapper-navbar navbar-user">
                <ul>
                    <li><i className='fas fa-home'></i> หน้าแรก</li>
                    <li><i className="fa-solid fa-magnifying-glass-location"></i> รีวิว</li>
                    <li><i className="fa-solid fa-newspaper"></i> ข่าวสาร</li>
                    <li><i className="fa-solid fa-people-group"></i> ทีมงาน</li>
                    <li><i className="fa-solid fa-user-plus"></i> สมัครสมาชิก</li>
                    <li><i className="fa-solid fa-arrow-right-to-bracket"></i> เข้าสู่ระบบ</li>
                    <li><i className="fa-regular fa-address-card"></i> เกี่ยวกับ</li>
                </ul>
                <div className="user-profile">
                    <i className="fa-solid fa-user"></i>&emsp;
                    <i className="fa-solid fa-envelope" style={{color:'orange'}}></i>
                </div>
            </nav>        
        </>
    );
}
export default IncludeNavbar;