import React, { Component } from "react";
// import Slider from "react-slick";
import './cards-carousel.scss';
// import './test'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

class CardsCarousel extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         firstCarouselItem: 0,
    //         lastCarouselItem: 4
    //     };
    // }
    onCarousel(firstItem, lastItem, e) {
        const carouselItem = document.querySelectorAll('.item-cards-carousel'),
        arrowLeft = document.querySelector('.bi-arrow-left-square'),
        arrowRight = document.querySelector('.bi-arrow-right-square');
        // switch (e.target){
        //         case arrowLeft: 
                        // carouselItem[firstItem].classList.add('hidden-left-carousel');
                        // carouselItem[lastItem].classList.remove('hidden-right-carousel');
                        // firstItem += 1;
                        // lastItem += 1;
                        // console.log(lastItem, firstItem)
        //                 break;
        //         case arrowRight:
        //                 carouselItem[firstItem].classList.remove('hidden-left-carousel');
        //                 carouselItem[lastItem].classList.add('hidden-right-carousel');
        //                 firstItem -= 1;
        //                 lastItem -= 1;
        //                 console.log(lastItem, firstItem)
        //                 break;
        //                 default:
        //                     console.log(e.target)
        // }
        if (e.target === arrowLeft) {
            carouselItem[firstItem].classList.add('hidden-left-carousel');
                        carouselItem[lastItem].classList.remove('hidden-right-carousel');
                        // firstItem -= 1;
                        // lastItem -= 1;
                        // console.log(lastItem, firstItem)
                        // return lastItem
                        
        } else if (e.target === arrowRight) {
            carouselItem[firstItem].classList.remove('hidden-left-carousel');
                        carouselItem[lastItem].classList.add('hidden-right-carousel');
                        // firstItem += 1;
                        // lastItem += 1;
                        // console.log(lastItem, firstItem)
                        // return (lastItem, firstItem)
        }
        return lastItem
    }
    
render() {
        let firstItem = 0,
        lastItem = 4;
    return (
      <div>
        <div className='h-center'>
                    <h2 >Этапы работы</h2>
        </div>
        <div className='cards-carousel'>
                <div className='left-pointer-carousel'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fillRule="currentColor" className="bi-arrow-left-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                 </div>
                 {/* <Slider {...settings}> */}
            <div className='item-cards-carousel'>
                    <div className='header-cards-carousel'>БРИФИНГ</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>на этом этапе мы будем общаться с вами, чтобы узнать все детали вашего проекта 
                        и понять ваши требования. Мы поговорим о целях вашей веб-страницы, целевой аудитории, сообщениях, которые вы хотите передать, 
                        а также об элементах дизайна и структуре вашей страницы.</div>
                    </div>
            </div>
            <div className='item-cards-carousel'>
                    <div className='header-cards-carousel'>ПРОЕКТИРОВАНИЕ</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>на основе информации, полученной на брифинге, мы создадим макет вашей веб-страницы. Вы сможете 
                        просмотреть и утвердить макет до того, как мы начнем его реализацию.</div>
                    </div>
            </div>
            <div className='item-cards-carousel'>
                    <div className='header-cards-carousel'>РАЗРАБОТКА</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>когда макет будет утвержден, мы начнем работу над разработкой вашей веб-страницы. Мы используем 
                        современные технологии, такие как HTML, CSS и JavaScript, чтобы создать функциональную и качественную веб-страницу. На этом этапе мы 
                        также установим хостинг и оптимизируем скорость загрузки страницы.</div>
                </div>
            </div>
            <div className='item-cards-carousel'>
                    <div className='header-cards-carousel'>ТЕСТИРОВАНИЕ</div>
                    <div className='background-cards-corousel'> 
                        <div className='text-cards-corousel'>после того, как ваша веб-страница будет готова, мы проведем тестирование, чтобы убедиться, что 
                        все работает должным образом. Мы проверим наличие ошибок, скорость загрузки и соответствие кросс-браузерным стандартам.</div>
                    </div>
            </div>
            <div className='item-cards-carousel hidden-right-carousel'>
                    <div className='header-cards-carousel'>ОПТИМИЗАЦИЯ</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>после тестирования мы оптимизируем вашу веб-страницу для улучшения скорости загрузки, улучшения 
                        SEO и повышения общей производительности.</div>
                    </div>
            </div>
            <div className='item-cards-carousel hidden-right-carousel'>
                    <div className='header-cards-carousel'>ПОДДЕРЖКА <br/>И ОБСЛУЖИВАНИЕ</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>мы не просто создаем сайты, но и обеспечиваем поддержку и обслуживание сайта после его запуска. 
                        Мы помогаем нашим клиентам решать любые проблемы и вопросы, связанные с их сайтом, чтобы они могли спокойно заниматься своим бизнесом.</div>
                    </div>
            </div>
            {/* </Slider> */}
            <div className='right-pointer-carousel'>
                <svg xmlns="http://www.w3.org/2000/svg"  fillRule="currentColor" className="bi-arrow-right-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
            </div>
        </div>    
      </div>
    );
}
  }
  
  export default CardsCarousel ;