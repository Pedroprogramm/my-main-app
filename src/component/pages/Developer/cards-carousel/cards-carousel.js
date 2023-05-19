import React, { Component } from "react";
import './cards-carousel.scss';


class CardsCarousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            first: 0,
            last: 4
        };
    }
    onCarousel = (e, last, first) => {
        const carouselItem = document.querySelectorAll('.item-cards-carousel'),
        textCarouselItem = document.querySelectorAll('.text-cards-corousel'),
        arrowLeft = document.querySelector('.bi-arrow-left-square'),
        arrowRight = document.querySelector('.bi-arrow-right-square');
        
        if (e.target === arrowRight) {
            if (first <= 1){
                this.setState(({first, last}) => ({
                    first : first + 1, 
                    last : last + 1
                }))
                carouselItem[first].classList.add('hidden-left-carousel');
                textCarouselItem[first].classList.add('hidden-text-corousel');
                carouselItem[last].classList.remove('hidden-right-carousel');
                textCarouselItem[last].classList.remove('hidden-text-corousel');
            
                                       
        } }else if (e.target === arrowLeft) {
            if (first >= 1){
                carouselItem[first - 1].classList.remove('hidden-left-carousel');
                textCarouselItem[first - 1].classList.remove('hidden-text-corousel');
                carouselItem[last - 1].classList.add('hidden-right-carousel');
                textCarouselItem[last - 1].classList.add('hidden-text-corousel');
                this.setState(({first, last}) => ({
                    first : first - 1, 
                    last : last - 1
                }))

        }}
    }
    
render() {
    
    return (
      <div>
        <div className='h-center'>
                    <h2 >Этапы работы</h2>
        </div>
        <div className='cards-carousel'>
                <div className='left-pointer-carousel'>
                        <svg xmlns="http://www.w3.org/2000/svg"  onClick={(e) => {this.onCarousel(e, this.state.last, this.state.first)}} fillRule="currentColor" className="bi-arrow-left-square" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                 </div>
            <div className='item-cards-carousel'>
                    <div className='header-cards-carousel'>БРИФИНГ</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>На этом этапе мы будем общаться с вами, чтобы узнать все детали вашего проекта <br/>
                        и понять ваши требования. Мы поговорим о целях вашей <br/> веб-страницы, целевой аудитории, сообщениях, которые вы хотите передать, 
                        а также об элементах дизайна <br/>и структуре вашей страницы.</div>
                    </div>
            </div>
            <div className='item-cards-carousel'>
                    <div className='header-cards-carousel'>ПРОЕКТИРОВАНИЕ</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>На основе информации, полученной на брифинге, <br/>мы создадим макет вашей <br/>веб-страницы. Вы сможете 
                        просмотреть и утвердить макет до того, как мы начнем его реализацию.</div>
                    </div>
            </div>
            <div className='item-cards-carousel'>
                    <div className='header-cards-carousel'>РАЗРАБОТКА</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>Когда макет будет утвержден, мы начнем работу над разработкой вашей <br/>веб-страницы. Мы используем 
                        современные технологии, такие как HTML, CSS и JavaScript, чтобы создать функциональную и качественную веб-страницу. На этом этапе мы 
                        также установим хостинг <br/>и оптимизируем скорость загрузки страницы.</div>
                </div>
            </div>
            <div className='item-cards-carousel'>
                    <div className='header-cards-carousel'>ТЕСТИРОВАНИЕ</div>
                    <div className='background-cards-corousel'> 
                        <div className='text-cards-corousel'>После того, как ваша <br/>веб-страница будет готова,<br/> мы проведем тестирование, чтобы убедиться, что 
                        все работает должным образом. <br/>Мы проверим наличие ошибок, скорость загрузки и соответствие кросс-браузерным стандартам.</div>
                    </div>
            </div>
            <div className='item-cards-carousel hidden-right-carousel'>
                    <div className='header-cards-carousel'>ОПТИМИЗАЦИЯ</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>После тестирования <br/>мы оптимизируем вашу <br/>веб-страницу для улучшения скорости загрузки, улучшения 
                        SEO и повышения общей производительности.</div>
                    </div>
            </div>
            <div className='item-cards-carousel hidden-right-carousel'>
                    <div className='header-cards-carousel'>ПОДДЕРЖКА <br/>И ОБСЛУЖИВАНИЕ</div>
                    <div className='background-cards-corousel'>
                        <div className='text-cards-corousel'>Мы не просто создаем сайты, <br/>но и обеспечиваем поддержку <br/>и обслуживание сайта после его запуска. 
                        Мы помогаем нашим клиентам решать любые проблемы и вопросы, связанные с их сайтом, чтобы они могли спокойно заниматься своим бизнесом.</div>
                    </div>
            </div>
            <div className='right-pointer-carousel'>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => {this.onCarousel(e, this.state.last, this.state.first)}} fillRule="currentColor" className="bi-arrow-right-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
            </div>
        </div>    
      </div>
    );
}
  }
  
  export default CardsCarousel ;