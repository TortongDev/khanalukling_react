import { useEffect } from 'react';
import '../css/header.css';
import '../css/style.css';
function IncludeHeader()
{
    useEffect(()=>{
        let fade = document.querySelector('.fade');
        const titleHeader  = document.querySelector('.slide-menu-mobile')
        let i = false;
        titleHeader.addEventListener('click',()=>{
            if(i == false){
                fade.style.display = 'block'
                i = true;
            }else{
                fade.style.display = 'none'
                i = false;
            }
        })
    })
    return (
        <>
            <header className="wrapper-header">
                <section className="title-header">Khanalukling</section>
                <section className="slide-menu-pc"></section>
                <section className="slide-menu-mobile"><i class="fa-solid fa-bars"></i></section>
            </header>
        </>
    );
}
export default IncludeHeader;