
import  IncludeHeader  from "../includes/IncludeHeader";
import  IncludeNavbar  from "../includes/IncludeNavbar";
import React, { useEffect } from 'react';
import '../../node_modules/slick-carousel/slick/slick';
import  $  from "jquery";
function PageHome (){
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
        <IncludeNavbar />
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
            <h4 style={{margin:'0px'}}>Header 1</h4>
        </div>
        <article className="wrapper-gallery">
            <section>
                <div className="img-gallery"></div>
                <div className="text-gallery">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sequi!
                </div>
            </section>
        </article>
    </>);
}
export default PageHome;