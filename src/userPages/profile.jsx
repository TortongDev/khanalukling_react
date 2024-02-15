import IncludeFooter from '../includes/IncludeFooter';
import IncludeHeader from '../includes/IncludeHeader';
import IncludeNavbarUser from '../includes/IncludeNavbarUser';
import IncludeNavbarMobileUser from '../includes/IncludeNavbarMobileUser';
function Profile(){
    return (
        <>
        <IncludeHeader />
        <IncludeNavbarUser />
        <IncludeNavbarMobileUser />
            <div className="wrapper-container">
                <div className="wrapper-profile">
                    <div className="img-profile">
                        Profile Image
                    </div>
                    <div class="form-upload-avatar w3-container">
                        <label>Upload Image Avatar</label>
                        <input className="w3-input" type="file" name='img-avatar' id='img-avatar' />
                    </div>
                    <div className="text-header">
                        <h3><i class="fa-regular fa-id-card"></i> ข้อมูลส่วนตัว</h3>
                    </div>
                    <div className="text-desc">
                        <table className='table-profile w3-table-all'>
                            <tr>
                                <th>Username</th>
                                <td>tortong91</td>
                            </tr>
                            <tr>
                                <th>First Name</th>
                                <td>kittithat</td>
                            </tr>
                            <tr>
                                <th>Last Name</th>
                                <td>charonekhet</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>kittithat@mail.com</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, dignissimos.</td>
                            </tr>
                           
                        </table>
                    </div>
                </div>
            </div>
            <IncludeFooter />
        </>
    );
}
export default Profile;