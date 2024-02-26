import { useEffect, useState } from "react";
import IncludeHeader from "../includes/IncludeHeader";
import IncludeNavbar from "../includes/IncludeNavbar";

function ReviewContentPage()
{
   
    const [contents, setContents] = useState([]);
        useEffect(()=>{
            fetch('http://localhost/backend_khanalukling/Api/get-content/api')
            .then(response => response.json())
            .then((data)=> {
                setContents(data[0])
                console.log(data[0])
            })
            .catch(error => console.log(error));
    },[])
    return(
        <>
            <IncludeHeader />
            <IncludeNavbar />
            <div className="wrapper-container">
                <div className="wrapper-review">
                <div className="tabbar-title">
                    <h4 style={{'margin':'0px','font-size':'1rem;font-weight:bold;'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, optio.
                    </h4>
                    {/* <h4  ><i class="fa-solid fa-up-right-from-square"></i></h4> */} {contents.date_start}
                </div>
                <br />
                <article className="review-content-page">
                    <section className="review-content">
                    <br />
                    <div className="tes" dangerouslySetInnerHTML={{__html: contents.content_type}}></div>
                    Lorem.
                    </section>
                </article>
                </div>
            </div>
        </>
    );

}
export default ReviewContentPage;