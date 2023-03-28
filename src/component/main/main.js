import './main.scss';
import '../app.scss';


function Main() {
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
                <div className='h-center'>
                    <h2 >Почему стоит выбрать нас</h2>
                </div>
                <div className='choose-us-main container'>
                    <div className='cards-choose'>
                        <div className='item-cards-choose'>
                        Выбор правильного партнера для создания вашего сайта может сделать большую разницу в успехе вашего онлайн бизнеса. 
                        Мы - профессиональная веб-студия, которая предоставляет комплексные услуги по созданию сайтов любой сложности и 
                        направленности.
                        </div>
                        <div className='item-cards-choose'>
                        Наши специалисты имеют обширный опыт в разработке сайтов различных категорий, включая корпоративные сайты, 
                        интернет-магазины, лендинги, порталы и многое другое. Мы используем передовые технологии и инструменты, чтобы 
                        создавать качественные и современные сайты, которые будут соответствовать вашим потребностям и целям.
                        </div>
                        <div className='item-cards-choose'>
                        Мы понимаем, что каждый проект уникален, и поэтому мы обеспечиваем индивидуальный подход к каждому заказчику. 
                        Мы тщательно анализируем ваши потребности и цели, чтобы разработать индивидуальную стратегию создания сайта, 
                        которая будет соответствовать вашим ожиданиям и бюджету.
                        </div>
                        <div className='item-cards-choose'>
                        Мы также предоставляем услуги по оптимизации сайтов для поисковых систем, что поможет увеличить трафик и привлечь 
                        больше клиентов. Мы гарантируем высокое качество работы, своевременное выполнение проектов и доступные цены.
                        </div>
                        <div className='item-cards-choose'>
                        Выбирая нас для создания вашего сайта, вы можете быть уверены, что получите качественный продукт, который будет 
                        соответствовать вашим потребностям и поможет вам достичь успеха в онлайн-среде.
                        </div>
                    </div>
                    <div className='slides-choose-us'>
                        <span>PRIMER PRIMER PRIMER PRIMER </span>
                        <video className='slide-video' autoPlay loop muted >
                            <source src='/slide.mp4' />
                        </video>
                    </div>
                </div>
                <div className='call-us'>
                    <div className='call-us-wrapper'>
                        <h1> Есть вопросы - свяжитесь с нами</h1>
                        <h1> <a href='13123'>Контакты</a> </h1>
                    </div>
                </div>
                <div className='services-main container'>
                <div className='h-center'>
                    <h2>Какие услуги мы предлагаем</h2>
                </div>
                <div className='cards-service'>
                    <div className='item-cards-service'>
                        <h3> Front-end разработка</h3>
                        <h4>Frontend-разработка - это ключевой элемент создания сайтов, который включает в себя
                            разработку пользовательского интерфейса и его взаимодействие с пользователем. Наша команда
                            опытных frontend-разработчиков занимается разработкой высококачественных и интуитивно
                            понятных пользовательских интерфейсов, которые гарантируют удобство и удовлетворение
                            пользовательских потребностей.
                         </h4>
                    </div>
                    <div className='item-cards-service'>
                        <h3>Таргетированная реклама </h3>
                        <h4>Таргетированная реклама - это эффективный инструмент для привлечения новых клиентов и
                            увеличения продаж в вашем бизнесе. Мы предоставляем услуги по таргетированной рекламе на
                            различных платформах, таких как Facebook, Instagram, Google и других.
                        </h4>
                    </div>
                    <div className='item-cards-service'>
                        <h3>Ведение SMM</h3>
                        <h4>Ведение социальных сетей - это неотъемлемая часть успешного онлайн-продвижения вашего бизнеса.
                            Мы предоставляем услуги по ведению социальных сетей, которые помогут вам привлечь новых клиентов,
                            увеличить узнаваемость бренда и улучшить взаимодействие с вашей целевой аудиторией.
                        </h4>
                    </div>
                    <div className='item-cards-service'>
                        <h3>Дизайн </h3>
                        <h4>Дизайн - это ключевой элемент любого успешного проекта, будь то сайт, логотип, баннер или любой 
                            другой продукт. Мы предоставляем услуги по дизайну, которые помогут вам создать уникальный, привлекательный 
                            и запоминающийся образ вашего бренда.
                         </h4>
                    </div>
                </div>
            </div>
                <div className='our-project container'>
                    <div className='ptoject-cards'>
                        <div className='preview-project'></div>
                    </div>
                </div>
        </main>
    );
  }
  
  export default Main;