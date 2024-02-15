function MenuMobile()
{
    return (
        <>
            <nav className="menu-mobile">
                <ul>
                    <li><i className='fas fa-home'></i> หน้าแรก</li>
                    <li><i class="fa-solid fa-magnifying-glass-location"></i> รีวิว</li>
                    <li><i class="fa-solid fa-newspaper"></i> ข่าวสาร</li>
                    <li><i class="fa-solid fa-people-group"></i> ทีมงาน</li>
                    <li><i class="fa-solid fa-user-plus"></i> สมัครสมาชิก</li>
                    <li><i class="fa-solid fa-arrow-right-to-bracket"></i> เข้าสู่ระบบ</li>
                    <li> <i class="fa-regular fa-address-card"></i> เกี่ยวกับ</li>
                    <li> <i class="fa-regular fa-address-card"></i> <a href="/user-profile"><li> <i class="fa-regular fa-address-card"></i> ผู้ใช้งาน</li></a></li>
                </ul>
            </nav>
        </>
    )

}
export default MenuMobile;