import IncludeHeader from "../includes/IncludeHeader";
import IncludeNavbar from "../includes/IncludeNavbar";

function Login(){
    return(
        <>
            <div className="clearfix">
                <IncludeHeader />
                <IncludeNavbar />
                
                <br />
                <br />

                <article className="wrapper-container">
                    
                    <section className="login">
                    <center><h2>เข้าสู่ระบบ</h2></center>
                    <form class="w3-container">

                        <label>Username / Email</label>
                        <input class="w3-input" type="text" />

                        <label>Password</label>
                        <input class="w3-input" type="text" />

                    </form>
                    </section>
                </article>
            </div>
        </>
    );
}
export default Login;