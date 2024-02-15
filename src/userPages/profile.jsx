import '../css/style.css';
import IncludeHeader from '../includes/IncludeHeader';
import IncludeNavbarUser from '../includes/IncludeNavbarUser';
function Profile(){
    return (
        <>
        <IncludeHeader />
        <IncludeNavbarUser />
            <div className="wrapper-container">
                <div className="wrapper-profile">
                    <div className="img-profile">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="text-header">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, fuga?
                    </div>
                    <div className="text-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia et voluptate, odit dolor omnis id laborum? Officiis dolor vitae repudiandae debitis cumque animi itaque vero quae numquam! Possimus pariatur eaque quibusdam deleniti consequuntur! Architecto nisi odit doloribus consectetur repellat, ipsam amet placeat cumque voluptatum possimus nemo, cupiditate praesentium commodi? Animi, aperiam? Voluptates voluptate error mollitia animi sed accusantium perferendis nam deleniti, aperiam amet quam non quod eos laudantium provident sapiente nihil molestias sequi iste incidunt! Enim porro laboriosam sint dolores velit voluptatibus suscipit nulla tenetur quaerat distinctio quasi alias fuga eveniet natus ipsam, a laudantium neque atque assumenda ea.
                    </div>
                </div>
            </div>
        </>
    );
}
export default Profile;