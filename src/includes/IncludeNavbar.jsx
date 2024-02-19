import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function IncludeNavbar()
{
    return (
        <>
            <nav className="wrapper-navbar">
                <ul>
                    <li><i className='fas fa-home'></i><a href="/">หน้าแรก</a></li>
                    <li><i class="fa-solid fa-magnifying-glass-location"></i><a href="/review-page"> รีวิว</a></li>
                    <li><i class="fa-solid fa-newspaper"></i> ข่าวสาร</li>
                    <li><i class="fa-solid fa-people-group"></i> ทีมงาน</li>
                    <li><i class="fa-solid fa-user-plus"></i> สมัครสมาชิก</li>
                    <li><i class="fa-solid fa-arrow-right-to-bracket"></i><a href="/login-page"> เข้าสู่ระบบ</a></li>
                    <li> <i class="fa-regular fa-address-card"></i> เกี่ยวกับ</li>
                </ul>
            </nav>        
        </>
    );
}
export default IncludeNavbar;