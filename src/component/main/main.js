import { Component} from 'react';

import './main.scss';
import '../app.scss';
import CardsCarousel from './cards-carousel/cards-carousel';
// import FirstSite from './Site1/reactComponent';


class Main extends Component {
    // constructor(props) {
    //     super(props);
    // }

    onSlide (e) {
        const cards = document.querySelectorAll('.back-cards'),
              card = document.querySelectorAll('.item-cards-choose'),
              header = document.querySelectorAll('.header-item-cards'),
              text = document.querySelectorAll('.text-item-cards');
        const slides = document.querySelectorAll('.slide-choose');

        function fat (item) {
            item.forEach((item, index) => {
                if (item === e.target) {   

                    cards.forEach(card => {
                        card.classList.remove('active-back-cards');
                    })
                    cards[index].classList.add('active-back-cards');
                    // cards[index].classList.remove('back-cards');
                    
                    slides.forEach(item => {
                        item.classList.remove('active-slide')
                    });
                    slides[index].classList.add('active-slide') 
            // item.indexOf(e.target)
                }
        } ); 
    }
    if (e.target.classList.contains('back-cards'))
    { fat(cards)} else if (e.target.classList.contains('item-cards-choose')) {
        fat(card)} else if (e.target.classList.contains('header-item-cards')) {
            fat(header)} else if (e.target.classList.contains('text-item-cards')) {
                fat(text)
            }
    }

    // onOurProjectE(e) {
    //     if (e.target.classList.contains('rewriting-card') || e.target.classList.contains('item-cards-service')){
    //         const card = document.querySelector('.item-cards-service');
    //         card.classList.add('active-test')
    //     }
    // }
    // onOurProjectL(e) {
    //     if (e.target.classList.contains('rewriting-card') || e.target.classList.contains('item-cards-service')){
    //         const card = document.querySelector('.item-cards-service');
    //         card.classList.remove('active-test')
    //     }
    // }

    render (){
      
    return (
        <main className="main">
            <div className='head-main container'>
                <div className='video'>
                    <video className='head-main-video' autoPlay loop muted height={4000}>
                        <source src='/head-main-video.mp4'/>
                    </video>
                </div>
                <div className='head-main-content'>
                    <h1>Создаем сайты</h1>
                    <h3>Мы предлагаем услуги по созданию уникальных и современных сайтов для вашего бизнеса.
                        Наша команда профессиональных веб-разработчиков готова создать сайт любой сложности - от
                        простых лендингов до сложных корпоративных сайтов и интернет-магазинов. Мы работаем индивидуально 
                        с каждым клиентом, чтобы создать сайт, который отвечает вашим уникальным потребностям и целям.
                        Мы используем современные технологии и инструменты, чтобы создать сайт, который не только выглядит
                        привлекательным, но и функционирует на высшем уровне. Мы гарантируем, что ваш сайт будет отличаться
                        высокой скоростью загрузки, хорошей проходимостью, удобной навигацией и привлекательным дизайном.
                        Кроме того, мы обеспечиваем поддержку сайта после его запуска, чтобы гарантировать его бесперебойную
                        работу и дальнейшее развитие. Сотрудничество с нами - это надежный способ создания сайта, который
                        поможет вашему бизнесу привлекать новых клиентов и развиваться в онлайн-среде.
                    </h3>
                </div>
            </div>
            <CardsCarousel/>
                <div className='h-center'>
                    <h2>Какие сайты мы разрабатываем</h2>
                </div>
                <div className='choose-us-main '>
                    <div className='cards-choose'>
                        
                        <div className='back-cards active-back-cards' onClick={this.onSlide}>
                            <div>
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>1</span><br/>
                                <span className='header-item-cards'>Корпоративный информационный web - сайт</span><br/><br/>
                                <span className='text-item-cards'>
                                создается для предоставления информации о продуктах, услугах, компании, контактах, новостях и других аспектах бизнеса
                                </span>
                            </div>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>2</span><br/>
                                <span className='header-item-cards'>Корпоративный имидежевый web - сайт</span><br/><br/>
                                <span className='text-item-cards'>
                                создается для укрепления бренда компании, формирования положительного восприятия у целевой аудитории, 
                                привлечения клиентов, партнеров и инвесторов, а также для установления контактов с представителями СМИ 
                                и другими организациями.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>3</span><br/>
                                <span className='header-item-cards'>Одностраничный сайт</span><br/><br/>
                                <span className='text-item-cards'>
                                нужен для простой и быстрой передачи информации о продукте или услуге, представления портфолио, 
                                сбора заявок и контактной информации, а также для увеличения продаж своего продукта или услуг и удобства пользователей.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>4</span><br/>
                                <span className='header-item-cards'>Сайт - визитка</span><br/><br/>
                                <span className='text-item-cards'>
                                Как понятно из названия, основная задача данного сайта – представлять данные об объекте. Как правило, 
                                сайт-визитка имеет достаточно лаконичное, но функциональное оформление. Обычно такой сайт включает в себя несколько 
                                страниц, на которых размещена основная информация, например, о компании, виды услуг, цены, контакты и пр.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>5</span><br/>
                                <span className='header-item-cards'>Персональный проект</span><br/><br/>
                                <span className='text-item-cards'>
                                Такой сайт может содержать все, что угодно, также нет жестких правил дизайна. Вся информация и оформление направлены на то, 
                                чтобы максимально полно ознакомить посетителей с тематикой проекта и сайта.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>6</span><br/>
                                <span className='header-item-cards'>Промо - сайт</span><br/><br/>
                                <span className='text-item-cards'>
                                Это сайт созданный специально для продвижения какого-либо товара либо услуги или основного сайта компании. Компаниям 
                                выгодно создавать новый сайт под ту или иную акцию, так как это позволяет оптимизировать его под рейтинги поисковых машин, 
                                а значит, привлечь максимальное количество посетителей.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>
                    </div>
                    <div className='slides'>
                        <div className='slide-choose active-slide'>
                            <iframe className="inlineFrameExample"
                            title="Inline Frame Example"
                            width="100%"
                            height="600"
                            src='Site1/index.html'/> 
                       </div>
                        <div className='slide-choose'>
                            <iframe className="inlineFrameExample"
                            title="Inline Frame Example"
                            width="100%"
                            height="600"
                            src='Site1/index.html'/> 
                        </div>
                        <div className='slide-choose'>
                        <iframe className="inlineFrameExample"
                            title="Inline Frame Example"
                            width="100%"
                            height="600"
                            src='Site1/index.html'/> 
                        </div>
                        <div className='slide-choose'>
                            <iframe className="inlineFrameExample"
                            title="Inline Frame Example"
                            width="100%"
                            height="600"
                            src='Site4/index.html'/> 
                        </div>
                        <div className='slide-choose'>
                        <iframe className="inlineFrameExample"
                            title="Inline Frame Example"
                            width="100%"
                            height="600"
                            src='Site3/index.html'/>
                        </div>
                        <div className='slide-choose'>
                            <div className='slide-text'> PRIMER PRIMER PRIMER PRIMER 6 </div>
                            <img src='service3.jpg' alt='business analysis' className='slide-photo'/>
                        </div>  
                    </div>
                </div>
                <div className='call-us'>
                    <div className='call-us-wrapper'>
                        <h1> Есть вопросы - свяжитесь с нами</h1>
                         <div> 
                            <a href='13123' className='contact'>Контакты</a> <br/>
                            <span className='overline-contact'></span> 
                         </div>
                    </div>
                </div>
                <div className='services-main container'>
                <div className='h-center'>
                    <h2>Какие услуги мы предлагаем</h2>
                </div>
                <div className='cards-service'  >
                    <div className='item-cards-service programm' onMouseEnter={this.onOurProjectE} onMouseLeave={this.onOurProjectL}>
                        <div className='rewriting-card' >
                            <div className='background-text-service'>
                                <span className='header-text-service'> Front-end разработка</span>
                                    <span className='text-service'> - это ключевой элемент создания сайтов, который включает в себя
                                    <span className='dott-service'>...</span>
                                    <span className='hide-text-service'>
                                        разработку пользовательского интерфейса и его взаимодействие с пользователем. Наша команда
                                        опытных frontend-разработчиков занимается разработкой высококачественных и интуитивно
                                        понятных пользовательских интерфейсов, которые гарантируют удобство и удовлетворение
                                        пользовательских потребностей.
                                    </span>
                                    </span>
                            </div>
                        </div>
                    </div>

                    <div className='item-cards-service advertising' >
                        <div className='rewriting-card'>
                            <div className='background-text-service'>
                                <span className='header-text-service'>Таргетированная реклама </span>
                                    <span className='text-service'>- это эффективный инструмент для привлечения новых</span>  
                                    <span className='dott-service'>...</span>
                                    <span className='hide-text-service'>
                                        клиентов и
                                        увеличения продаж в вашем бизнесе. Мы предоставляем услуги по таргетированной рекламе на
                                        различных платформах, таких как Facebook, Instagram, Google и других.
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className='item-cards-service smm'>
                        <div className='rewriting-card'>
                            <div className='background-text-service'>
                                <span className='header-text-service'>Ведение SMM</span>
                                <span className='text-service'> - это неотъемлемая часть успешного онлайн-продвижения вашего бизнеса. Мы</span>
                                <span className='dott-service'>...</span>
                                <span className='hide-text-service'>
                                    предоставляем услуги по ведению социальных сетей, которые помогут вам привлечь новых клиентов,
                                    увеличить узнаваемость бренда и улучшить взаимодействие с вашей целевой аудиторией.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='item-cards-service design'>
                        <div className='rewriting-card'>
                            <div className='background-text-service'>
                                <span className='header-text-service'>Дизайн</span>
                                <span className='text-service'> - это ключевой элемент любого успешного проекта, будь то</span>
                                <span className='dott-service'>...</span>
                                <span className='hide-text-service'>
                                    сайт, логотип, баннер или любой 
                                    другой продукт. Мы предоставляем услуги по дизайну, которые помогут вам создать уникальный, привлекательный 
                                    и запоминающийся образ вашего бренда.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/* <div className='our-project container'>
                    <div className='ptoject-cards'>
                        <div className='preview-project'></div>
                    </div>
                </div>
                <div>Выбор правильного партнера для создания вашего сайта может сделать большую разницу в успехе вашего онлайн бизнеса.
                        Мы - профессиональная веб-студия, которая предоставляет комплексные услуги по созданию сайтов любой сложности и 
                        направленности.
                        Наши специалисты имеют обширный опыт в разработке сайтов различных категорий, включая корпоративные сайты, 
                        интернет-магазины, лендинги, порталы и многое другое. Мы используем передовые технологии и инструменты, чтобы 
                        создавать качественные и современные сайты, которые будут соответствовать вашим потребностям и целям.
                        Мы понимаем, что каждый проект уникален, и поэтому мы обеспечиваем индивидуальный подход к каждому заказчику. 
                        Мы тщательно анализируем ваши потребности и цели, чтобы разработать индивидуальную стратегию создания сайта, 
                        которая будет соответствовать вашим ожиданиям и бюджету.
                        Мы также предоставляем услуги по оптимизации сайтов для поисковых систем, что поможет увеличить трафик и привлечь 
                        больше клиентов. Мы гарантируем высокое качество работы, своевременное выполнение проектов и доступные цены.
                        Выбирая нас для создания вашего сайта, вы можете быть уверены, что получите качественный продукт, который будет 
                        соответствовать вашим потребностям и поможет вам достичь успеха в онлайн-среде.</div>
                        <div className='back-cards active-back-cards'>
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>1</span><br/>
                                <span className='header-item-cards'>Опыт и экспертиза:</span><br/><br/>
                                <span className='text-item-cards'>
                                    Наша команда имеет большой опыт работы в области создания сайтов. 
                                    Мы знаем, как создавать сайты, которые не только привлекают внимание, но и максимально эффективны в достижении 
                                    целей заказчика.
                                </span>
                            </div>
                        </div>

                        <div className='back-cards'>
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>2</span><br/>
                                <span className='header-item-cards'>Индивидуальный подход:</span><br/><br/>
                                <span className='text-item-cards'>
                                    Мы понимаем, что каждый бизнес уникален, поэтому мы создаем сайты, учитывая индивидуальные 
                                    потребности и цели заказчика. Мы работаем в тесном сотрудничестве с клиентом, чтобы создать сайт, который 
                                    идеально подходит для его бизнеса.
                                </span>
                            </div>
                        </div>

                        <div className='back-cards'>
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>3</span><br/>
                                <span className='header-item-cards'>Комплексный подход:</span><br/><br/>
                                <span className='text-item-cards'>
                                    мы не только создаем дизайн сайта, но и заботимся о его 
                                    функциональности, скорости загрузки, адаптивности к различным устройствам и т.д. Мы учитываем все аспекты сайта, 
                                    чтобы он был максимально эффективным и приносил реальную пользу бизнесу.
                                </span>
                            </div>
                        </div>

                        <div className='back-cards'>
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>4</span><br/>
                                <span className='header-item-cards'>Качество работы:</span><br/><br/>
                                <span className='text-item-cards'>
                                    мы стремимся к высокому качеству нашей работы. Мы используем только передовые технологии и инструменты, 
                                    чтобы создавать сайты, которые отвечают самым высоким стандартам качества.
                                </span>
                            </div>
                        </div>

                        <div className='back-cards'>
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>5</span><br/>
                                <span className='header-item-cards'>Поддержка и обслуживание:</span><br/><br/>
                                <span className='text-item-cards'>
                                Поддержка: после публикации мы поддерживаем вашу веб-страницу, обновляем ее контент и исправляем ошибки, которые могут возникнуть.
                                </span>
                            </div>
                        </div> 
                        <div className='back-cards active-back-cards' onClick={this.onSlide} onMouseEnter={this.onSlide} onMouseLeave={this.onSlide}>
                            <div>
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>1</span><br/>
                                <span className='header-item-cards'>Брифинг:</span><br/><br/>
                                <span className='text-item-cards'>
                                    на этом этапе мы будем общаться с вами, чтобы узнать все детали вашего проекта и понять ваши требования. 
                                    Мы поговорим о целях вашей веб-страницы, целевой аудитории, сообщениях, которые вы хотите передать, а 
                                    также об элементах дизайна и структуре вашей страницы.
                                </span>
                            </div>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide} onMouseEnter={this.onSlide} onMouseLeave={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>2</span><br/>
                                <span className='header-item-cards'>Проектирование:</span><br/><br/>
                                <span className='text-item-cards'>
                                    на основе информации, полученной на брифинге, мы создадим макет вашей веб-страницы. 
                                    Вы сможете просмотреть и утвердить макет до того, как мы начнем его реализацию.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide} onMouseEnter={this.onSlide} onMouseLeave={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>3</span><br/>
                                <span className='header-item-cards'>Разработка:</span><br/><br/>
                                <span className='text-item-cards'>
                                    когда макет будет утвержден, мы начнем работу над разработкой вашей веб-страницы. Мы 
                                    используем современные технологии, такие как HTML, CSS и JavaScript, чтобы создать 
                                    функциональную и качественную веб-страницу. На этом этапе мы также установим хостинг 
                                    и оптимизируем скорость загрузки страницы.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide} onMouseEnter={this.onSlide} onMouseLeave={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>4</span><br/>
                                <span className='header-item-cards'>Тестирование:</span><br/><br/>
                                <span className='text-item-cards'>
                                    после того, как ваша веб-страница будет готова, мы проведем тестирование, чтобы убедиться, 
                                    что все работает должным образом. Мы проверим наличие ошибок, скорость загрузки и соответствие 
                                    кросс-браузерным стандартам.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide} onMouseEnter={this.onSlide} onMouseLeave={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>5</span><br/>
                                <span className='header-item-cards'>Оптимизация:</span><br/><br/>
                                <span className='text-item-cards'>
                                    после тестирования мы оптимизируем вашу веб-страницу для улучшения скорости загрузки, 
                                    улучшения SEO и повышения общей производительности.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>

                        <div className='back-cards' onClick={this.onSlide} onMouseEnter={this.onSlide} onMouseLeave={this.onSlide}>
                            
                            <div className='item-cards-choose'>
                                <span className='item-cards-number'>6</span><br/>
                                <span className='header-item-cards'>Поддержка и обслуживание:</span><br/><br/>
                                <span className='text-item-cards'>
                                    мы не просто создаем сайты, но и обеспечиваем поддержку и обслуживание сайта после его запуска. 
                                    Мы помогаем нашим клиентам решать любые проблемы и вопросы, связанные с их сайтом, чтобы они могли 
                                    спокойно заниматься своим бизнесом.
                                </span>
                            </div>
                            <div className='test-back'></div>
                        </div>*/}
        </main>
    );
    }
  }
  
  export default Main;