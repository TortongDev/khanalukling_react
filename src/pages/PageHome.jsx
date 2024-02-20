
import  IncludeHeader  from "../includes/IncludeHeader";
import  IncludeNavbar  from "../includes/IncludeNavbar";
import  IncludeNavbarMobile  from "../includes/IncludeNavbarMobile";
import  IncludeFooter  from "../includes/IncludeFooter";
import React, { useEffect } from 'react';
import '../../node_modules/slick-carousel/slick/slick';
import  $  from "jquery";
import Cookies from "js-cookie";

function PageHome (){
    const fetchAll = ()=>{
        fetch('http://localhost/backend_khanalukling/Api/get-content/'+Cookies.get("token"))
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }
    useEffect(()=>{
        Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", {
            expires: 7,
        });
        fetchAll();
    })
    
    return(<>
        <div className="clearfix">
            <IncludeHeader />
            <IncludeNavbar />
            <IncludeNavbarMobile />
            <div className="wrapper-slide">
                <div className="banner"></div>
            </div>
        </div>
        <div className="intro-khanalukling">
            <h2>เป้าหมาย</h2>
            <h5>
                ทางเราเกิดจากกลุ่มเพื่อนที่มีอุดมการณ์ชอบการท่องเที่ยว กางเต้น เหมือนๆกัน เริ่มแรกพวกเราไปกางเต้นกันโดยมีไม่กี่คนในกลุ่มประมาณ 4 คนจากสมาชิกที่รวมกลุ่มกันจากที่ทำงานเดิม เป็นการรวมตัวกันขณะที่ทำงานที่ทำงานเดียวกันและได้มีโอกาสไปกางเต้นด้วยกัน พอตอนไปเที่ยวเรามีแนวคิดอยากจะแชร์ความทรงจำที่ได้จากการออกไปเที่ยวด้วยกัน จึ่งได้ร่วมมือกันจัดทำเว็บไชต์นี้ขึ้นมา
            </h5>
        </div>
        <div className="tabbar-title">
            {/* test style  */}
            <h4 style={{'margin':'0px','fontSize':'1rem;font-weight:bold;'}}>รีวิว <img src={process.env.PUBLIC_URL+"/new.ico"} style={{"width":"30px","margin-top":"-3px"}} alt="" /></h4>
            <h4  ><i className="fa-solid fa-up-right-from-square"></i></h4>
        </div>
        <article className="wrapper-gallery">
            <a href="/review-page">
                <section>
                    <div className="img-gallery">
                        <img src={process.env.PUBLIC_URL+'/images/gallery/LINE_ALBUM_3224_240214_1.jpg'} width={'100%'} height={'150px'} alt="" />
                    </div>
                    <div className="text-gallery">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                    </div>
                    <div className="footer-gallery grid-2">
                        <div className="grid-col-1"></div>
                        <div className="grid-col-2 grid-2">
                            <div className="g-view-number"><i className="fa-solid fa-eye"></i> 1000</div>
                            <div className="g-comment-number"><i className="fa-regular fa-comment"></i> 1000</div>
                        </div>
                    </div>
                </section>
            </a>
            <section>
                <div className="img-gallery">
                    <img src={process.env.PUBLIC_URL+'/images/gallery/LINE_ALBUM_3224_240214_1.jpg'} width={'100%'} height={'150px'} alt="" />
                </div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
                <div className="footer-gallery grid-2">
                    <div className="grid-col-1"></div>
                    <div className="grid-col-2 grid-2">
                        <div className="g-view-number"><i className="fa-solid fa-eye"></i> 1000</div>
                        <div className="g-comment-number"><i className="fa-regular fa-comment"></i> 1000</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="img-gallery">
                    <img src={process.env.PUBLIC_URL+'/images/gallery/LINE_ALBUM_3224_240214_1.jpg'} width={'100%'} height={'150px'} alt="" />
                </div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
                <div className="footer-gallery grid-2">
                    <div className="grid-col-1"></div>
                    <div className="grid-col-2 grid-2">
                        <div className="g-view-number"><i className="fa-solid fa-eye"></i> 1000</div>
                        <div className="g-comment-number"><i className="fa-regular fa-comment"></i> 1000</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="img-gallery">
                    <img src={process.env.PUBLIC_URL+'/images/gallery/LINE_ALBUM_3224_240214_1.jpg'} width={'100%'} height={'150px'} alt="" />
                </div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
                <div className="footer-gallery grid-2">
                    <div className="grid-col-1"></div>
                    <div className="grid-col-2 grid-2">
                        <div className="g-view-number"><i className="fa-solid fa-eye"></i> 1000</div>
                        <div className="g-comment-number"><i className="fa-regular fa-comment"></i> 1000</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="img-gallery">
                    <img src={process.env.PUBLIC_URL+'/images/gallery/LINE_ALBUM_3224_240214_1.jpg'} width={'100%'} height={'150px'} alt="" />
                </div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
                <div className="footer-gallery grid-2">
                    <div className="grid-col-1"></div>
                    <div className="grid-col-2 grid-2">
                        <div className="g-view-number"><i className="fa-solid fa-eye"></i> 1000</div>
                        <div className="g-comment-number"><i className="fa-regular fa-comment"></i> 1000</div>
                    </div>
                </div>
            </section>
        </article>
        <div className="tabbar-title">
            {/* test style  */}
            <h4 style={{'margin':'0px','fontSize':'1rem;font-weight:bold;'}}>ข่าว <img src={process.env.PUBLIC_URL+"/new.ico"} style={{"width":"30px","margin-top":"-3px"}} alt="" /></h4>
            <h4  ><i className="fa-solid fa-up-right-from-square"></i></h4>
        </div>
        <article className="wrapper-news">
           <section>
                <table className="w3-table">
                    <tbody>
                        <tr>
                            <td style={{'width': '80%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius, vel laudantium pariatur porro saepe fugiat modi accusamus officia, laboriosam sed nostrum odio fugit enim hic suscipit earum atque distinctio impedit nihil deserunt eaque magni illum necessitatibus. Voluptatibus, quas corrupti.</td>
                            <td>โดยคุณ user101</td>
                            <td>
                                <div className="grid-col-2 grid-2 padding-0">
                                    <div className="g-view-number"><i className="fa-solid fa-eye"></i> 1000</div>
                                    <div className="g-comment-number"><i className="fa-regular fa-comment"></i> 1000</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                 
                    <tbody>
                        <tr>
                            <td style={{'width': '80%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius, vel laudantium pariatur porro saepe fugiat modi accusamus officia, laboriosam sed nostrum odio fugit enim hic suscipit earum atque distinctio impedit nihil deserunt eaque magni illum necessitatibus. Voluptatibus, quas corrupti.</td>
                            <td>โดยคุณ user101</td>
                            <td>
                                <div className="grid-col-2 grid-2 padding-0">
                                    <div className="g-view-number"><i className="fa-solid fa-eye"></i> 1000</div>
                                    <div className="g-comment-number"><i className="fa-regular fa-comment"></i> 1000</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                 
                    <tbody>
                        <tr>
                            <td style={{'width': '80%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius, vel laudantium pariatur porro saepe fugiat modi accusamus officia, laboriosam sed nostrum odio fugit enim hic suscipit earum atque distinctio impedit nihil deserunt eaque magni illum necessitatibus. Voluptatibus, quas corrupti.</td>
                            <td>โดยคุณ user101</td>
                            <td>
                                <div className="grid-col-2 grid-2 padding-0">
                                    <div className="g-view-number"><i className="fa-solid fa-eye"></i> 1000</div>
                                    <div className="g-comment-number"><i className="fa-regular fa-comment"></i> 1000</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                 
                </table>
           </section>
           
        </article>

        <div className="tabbar-title">
            {/* test style  */}
            <h4 style={{'margin':'0px','fontSize':'1rem;font-weight:bold;'}}>ประชาสัมพันธ์ <img src={process.env.PUBLIC_URL+"/new.ico"} style={{"width":"30px","marginTop":"-3px"}} alt="" /></h4>
            <h4  ><i className="fa-solid fa-up-right-from-square"></i></h4>
        </div>
        <article className="wrapper-news">
           <section>
                <table className="w3-table">
                    
                    <tbody>
                        <tr>
                            <td style={{'width': '80%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius, vel laudantium pariatur porro saepe fugiat modi accusamus officia, laboriosam sed nostrum odio fugit enim hic suscipit earum atque distinctio impedit nihil deserunt eaque magni illum necessitatibus. Voluptatibus, quas corrupti.</td>
                            <td>โดยคุณ user101</td>
                            <td>*****</td>
                        </tr>
                    </tbody>
                 
                    <tbody>
                        <tr>
                            <td style={{'width': '80%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius, vel laudantium pariatur porro saepe fugiat modi accusamus officia, laboriosam sed nostrum odio fugit enim hic suscipit earum atque distinctio impedit nihil deserunt eaque magni illum necessitatibus. Voluptatibus, quas corrupti.</td>
                            <td>โดยคุณ user101</td>
                            <td>*****</td>
                        </tr>
                    </tbody>
                 
                    <tbody>
                        <tr>
                            <td style={{'width': '80%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eius, vel laudantium pariatur porro saepe fugiat modi accusamus officia, laboriosam sed nostrum odio fugit enim hic suscipit earum atque distinctio impedit nihil deserunt eaque magni illum necessitatibus. Voluptatibus, quas corrupti.</td>
                            <td>โดยคุณ user101</td>
                            <td>*****</td>
                        </tr>
                    </tbody>
                 
                </table>
           </section>
           
        </article>
        <IncludeFooter />
    </>);
}
export default PageHome;