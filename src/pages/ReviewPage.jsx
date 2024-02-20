import { useEffect, useRef, useState } from "react";
import IncludeHeader from "../includes/IncludeHeader";
import IncludeNavbar from "../includes/IncludeNavbar";
import IncludeFooter from "../includes/IncludeFooter";

function ReviewPage()
{
    const [contents,setContents] = useState([]);

    useEffect(()=>{

        fetch('http://localhost/backend_khanalukling/Api/get-content/j')
        .then(response => response.json())
        .then((data)=> {
            setContents(data[0])
            console.log(data[0].content_type)
        }).catch(error => console.log(error));
  
    },[]);
    return(
        <>
            <IncludeHeader />
            <IncludeNavbar />
            <div className="wrapper-container">
                <div className="wrapper-review">
                <div className="tabbar-title">
                    <h4 style={{'margin':'0px','font-size':'1rem;font-weight:bold;'}}>รีวิว <img src={process.env.PUBLIC_URL+"/new.ico"} style={{"width":"30px","margin-top":"-3px"}} alt="" /></h4>
                    <h4  ><i class="fa-solid fa-up-right-from-square"></i></h4>
                </div>
                <br />
                <div className="tes" dangerouslySetInnerHTML={{__html: contents.content_type}}></div>
                <div className="intro-review">
                    &emsp;&emsp;&emsp;&emsp;&emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus beatae similique veniam explicabo iste fuga quod quis adipisci ipsum nam facilis laborum laboriosam impedit repellat voluptatum sint aut, nulla officia quisquam reiciendis aliquam. Inventore facere voluptatibus quaerat aliquam alias repellendus tempora fugit. Neque, eos. Incidunt quidem, aliquid, voluptatem ullam obcaecati repellendus delectus est dolorem autem ipsam porro consequuntur? Aperiam, ut? Veniam consectetur totam dolores eos molestias similique repellendus temporibus placeat saepe est odit delectus, voluptatibus ex quibusdam id at aspernatur explicabo? Autem accusantium nisi deserunt impedit minima, veniam alias molestiae commodi est consequatur nemo. Excepturi facere eum placeat quas praesentium.
                </div>
                <article className="grid-review">
                    <section className="review">
                        <div className="image-review">

                        </div>
                        <div className="desc-review">

                        </div>

                    </section>
                    <section className="review">
                        <div className="image-review">

                        </div>
                        <div className="desc-review">
                            
                        </div>

                    </section>
                    <section className="review">
                        <div className="image-review">

                        </div>
                        <div className="desc-review">
                            
                        </div>

                    </section>
                    <section className="review">
                        <div className="image-review">

                        </div>
                        <div className="desc-review">
                            
                        </div>

                    </section>
                    <section className="review">
                        <div className="image-review">

                        </div>
                        <div className="desc-review">
                            
                        </div>

                    </section>
                    <section className="review">
                        <div className="image-review">

                        </div>
                        <div className="desc-review">
                            
                        </div>

                    </section>
                    <section className="review">
                        <div className="image-review">

                        </div>
                        <div className="desc-review">
                            
                        </div>

                    </section>
                </article>
                </div>
            </div>
          
            <IncludeFooter />
        </>
    );
    
}
export default ReviewPage;