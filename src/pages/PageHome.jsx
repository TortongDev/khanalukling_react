
import  IncludeHeader  from "../includes/IncludeHeader";
import  IncludeNavbar  from "../includes/IncludeNavbar";
import  IncludeNavbarMobile  from "../includes/IncludeNavbarMobile";
import  IncludeFooter  from "../includes/IncludeFooter";
import React, { useEffect } from 'react';
import '../../node_modules/slick-carousel/slick/slick';
import  $  from "jquery";
function PageHome (){
    const fetchAll = ()=>{
        fetch('http://localhost/backend_khanalukling/Api/get-content')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }
    useEffect(()=>{
        $('.fade').slick({
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            fade: true,
            cssEase: 'linear'
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
                <div class="fade">
                    <div className="flex">
                        <h2>Header 1</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quasi! Placeat incidunt nobis, ratione autem ipsam, aliquid delectus aspernatur ea, cupiditate sit minus odit. Iure est, porro amet eius fugiat ducimus quas ipsa voluptatem, harum odit exercitationem natus ipsam dolor eligendi animi, illo minima repellendus sunt vitae vero officia consectetur provident? Rem laudantium ipsam sapiente, tenetur odio quos eum deserunt ipsa quod assumenda sed voluptatem suscipit cupiditate officia quia in magnam quibusdam, voluptatum repudiandae exercitationem! Velit impedit iste similique eligendi architecto earum nulla. Modi, commodi dolorum? Dolor numquam eligendi quam odit, molestias architecto molestiae harum sint, illum ad obcaecati deleniti.
                    </div>
                    <div className="flex">
                        <h2>Header 2</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quasi! Placeat incidunt nobis, ratione autem ipsam, aliquid delectus aspernatur ea, cupiditate sit minus odit. Iure est, porro amet eius fugiat ducimus quas ipsa voluptatem, harum odit exercitationem natus ipsam dolor eligendi animi, illo minima repellendus sunt vitae vero officia consectetur provident? Rem laudantium ipsam sapiente, tenetur odio quos eum deserunt ipsa quod assumenda sed voluptatem suscipit cupiditate officia quia in magnam quibusdam, voluptatum repudiandae exercitationem! Velit impedit iste similique eligendi architecto earum nulla. Modi, commodi dolorum? Dolor numquam eligendi quam odit, molestias architecto molestiae harum sint, illum ad obcaecati deleniti.
                    </div> 
                    <div className="flex">
                        <h2>Header 3</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quasi! Placeat incidunt nobis, ratione autem ipsam, aliquid delectus aspernatur ea, cupiditate sit minus odit. Iure est, porro amet eius fugiat ducimus quas ipsa voluptatem, harum odit exercitationem natus ipsam dolor eligendi animi, illo minima repellendus sunt vitae vero officia consectetur provident? Rem laudantium ipsam sapiente, tenetur odio quos eum deserunt ipsa quod assumenda sed voluptatem suscipit cupiditate officia quia in magnam quibusdam, voluptatum repudiandae exercitationem! Velit impedit iste similique eligendi architecto earum nulla. Modi, commodi dolorum? Dolor numquam eligendi quam odit, molestias architecto molestiae harum sint, illum ad obcaecati deleniti.
                    </div>
                </div>
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
            <h4 style={{'margin':'0px','font-size':'1rem;font-weight:bold;'}}>รีวิว <img src={process.env.PUBLIC_URL+"/new.ico"} style={{"width":"30px","margin-top":"-3px"}} alt="" /></h4>
            <h4  ><i class="fa-solid fa-up-right-from-square"></i></h4>
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
                            <div className="g-view-number"><i class="fa-solid fa-eye"></i> 1000</div>
                            <div className="g-comment-number"><i class="fa-regular fa-comment"></i> 1000</div>
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
                        <div className="g-view-number"><i class="fa-solid fa-eye"></i> 1000</div>
                        <div className="g-comment-number"><i class="fa-regular fa-comment"></i> 1000</div>
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
                        <div className="g-view-number"><i class="fa-solid fa-eye"></i> 1000</div>
                        <div className="g-comment-number"><i class="fa-regular fa-comment"></i> 1000</div>
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
                        <div className="g-view-number"><i class="fa-solid fa-eye"></i> 1000</div>
                        <div className="g-comment-number"><i class="fa-regular fa-comment"></i> 1000</div>
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
                        <div className="g-view-number"><i class="fa-solid fa-eye"></i> 1000</div>
                        <div className="g-comment-number"><i class="fa-regular fa-comment"></i> 1000</div>
                    </div>
                </div>
            </section>
        </article>
        <div className="tabbar-title">
            {/* test style  */}
            <h4 style={{'margin':'0px','font-size':'1rem;font-weight:bold;'}}>ข่าว <img src={process.env.PUBLIC_URL+"/new.ico"} style={{"width":"30px","margin-top":"-3px"}} alt="" /></h4>
            <h4  ><i class="fa-solid fa-up-right-from-square"></i></h4>
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
                                    <div className="g-view-number"><i class="fa-solid fa-eye"></i> 1000</div>
                                    <div className="g-comment-number"><i class="fa-regular fa-comment"></i> 1000</div>
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
                                    <div className="g-view-number"><i class="fa-solid fa-eye"></i> 1000</div>
                                    <div className="g-comment-number"><i class="fa-regular fa-comment"></i> 1000</div>
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
                                    <div className="g-view-number"><i class="fa-solid fa-eye"></i> 1000</div>
                                    <div className="g-comment-number"><i class="fa-regular fa-comment"></i> 1000</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                 
                </table>
           </section>
           
        </article>

        <div className="tabbar-title">
            {/* test style  */}
            <h4 style={{'margin':'0px','font-size':'1rem;font-weight:bold;'}}>ประชาสัมพันธ์ <img src={process.env.PUBLIC_URL+"/new.ico"} style={{"width":"30px","margin-top":"-3px"}} alt="" /></h4>
            <h4  ><i class="fa-solid fa-up-right-from-square"></i></h4>
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