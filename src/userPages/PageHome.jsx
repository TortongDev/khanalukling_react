
import  IncludeHeader  from "../includes/IncludeHeader";
import  IncludeNavbarUser  from "../includes/IncludeNavbarUser";
import  IncludeNavbarMobileUser  from "../includes/IncludeNavbarMobileUser";
import React, { useEffect } from 'react';
import '../../node_modules/slick-carousel/slick/slick';
import  $  from "jquery";
function PageHomeUser (){
    useEffect(()=>{
        $('.fade').slick({
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            fade: true,
            cssEase: 'linear'
          });
    })
    
    return(<>
        <IncludeHeader />
        <IncludeNavbarUser />
        
        <IncludeNavbarMobileUser />
        <div className="wrapper-slide">
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
        <div className="tabbar-title">
            <h4 style={{margin:'0px'}}>รีวิวมาใหม่ <img src="%PUBLIC_URL%/new.webp" height={'30px'} alt="" /></h4>
            <h4><i class="fa-solid fa-up-right-from-square"></i></h4>
        </div>
        <article className="wrapper-gallery">
            <section>
                <div className="img-gallery">
                    <img src="/khanalukling_react/public/images/banner/LINE_ALBUM_3224_240214_1.jpg" alt="" />
                </div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
            </section>
            <section>
                <div className="img-gallery">
                    <img src="/khanalukling_react/public/images/banner/LINE_ALBUM_3224_240214_1.jpg" alt="" />
                </div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
            </section>
            <section>
                <div className="img-gallery">
                    <img src="/khanalukling_react/public/images/banner/LINE_ALBUM_3224_240214_1.jpg" alt="" />
                </div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
            </section>
            <section>
                <div className="img-gallery">
                    <img src="/khanalukling_react/public/images/banner/LINE_ALBUM_3224_240214_1.jpg" alt="" />
                </div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
            </section>
            <section>
                <div className="img-gallery">
                    <img src="/khanalukling_react/public/images/banner/LINE_ALBUM_3224_240214_1.jpg" alt="" />
                </div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
            </section>
        </article>
    </>);
}
export default PageHomeUser;