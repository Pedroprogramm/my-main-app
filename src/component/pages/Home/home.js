import React from 'react';
import { Component} from 'react';

import './home.scss';
import CallUs from '../Developer/call-us/callUs';
 
class Home extends Component {

render () {
  return (
    <>
      <div className='purple-back'></div>
      <div className='black-square'>
        <div className='header-text-square'>
          <strong>Добейтесь большего успеха: продвигайте свой бизнес в интернете с профессионалами</strong>
        </div>
        <div className='text-square'>
        Мы - команда экспертов в цифровом маркетинге, помогаем компаниям повысить узнаваемость бренда, увеличить продажи и 
        улучшить онлайн-присутствие. Наш индивидуальный подход и комплексные решения позволяют достигать результатов.
        </div>
        <div className='cards-home-container'>
        
          <div className='frst cards-home'>
            <img className='icon-cards-home' src='./home-cards/shield.png' alt='shield' height={100}></img>
            <span className='hover-text-home'><strong>Надежно</strong></span>
            {/* <img className='briefcase' src='./home-cards/briefcase.png' alt='briefcase'></img> */}
            <img className='shield1 hover-icons-cards' src='./home-cards/shield-anim.png' alt='shield'></img>
            <img className='shield2 hover-icons-cards' src='./home-cards/shield-anim.png' alt='shield'></img>
            <img className='shield5 hover-icons-cards' src='./home-cards/shield-anim.png' alt='shield'></img>
            <img className='shield3 hover-icons-cards' src='./home-cards/shield-anim.png' alt='shield'></img>
            <img className='shield4 hover-icons-cards' src='./home-cards/shield-anim.png' alt='shield'></img>
          </div>

          <div className='sec cards-home'>
            <img className='icon-cards-home' src='./home-cards/flash.png' alt='flash' height={100}></img>
            <span className='hover-text-home'><strong>Быстро</strong></span>
            <img className='first-dott flash-dotts' src='./home-cards/dot.png' alt='dott'></img>
            <img className='second-dott flash-dotts' src='./home-cards/dot.png' alt='dott'></img>
            <img className='third-dott flash-dotts' src='./home-cards/dot.png' alt='dott'></img>
            <img className='fourth-dott flash-dotts' src='./home-cards/dot.png' alt='dott'></img>
            <img className='fifth-dott flash-dotts' src='./home-cards/dot.png' alt='dott'></img>
            <img className='sixth-dott flash-dotts' src='./home-cards/dot.png' alt='dott'></img>
          </div>

          <div className='three cards-home'>
            <img className='icon-cards-home' src='./home-cards/premium.png' alt='premium' height={100}></img>
            <span className='hover-text-home'><strong>Качественно</strong></span>
            <img  src='./home-cards/like.png' alt='like' className='like-cards-home first-like'></img>
            <img  src='./home-cards/like.png' alt='like' className='like-cards-home second-like'></img>
            <img  src='./home-cards/like.png' alt='like' className='like-cards-home third-like'></img>
            <img  src='./home-cards/like.png' alt='like' className='like-cards-home fourth-like'></img>
            <img  src='./home-cards/like.png' alt='like' className='like-cards-home fifth-like'></img>
            <img  src='./home-cards/like.png' alt='like' className='like-cards-home sixth-like'></img>
          </div>

          <div className='four cards-home'>
            <img className='icon-cards-home' src='./home-cards/benefits.png' alt='benefits' height={100}></img>
            <span className='hover-text-home'><strong>Доступно</strong></span>
            <img className='first-coin coins-animate' src='./home-cards/coin.png' alt='coin'></img>
            <img className='second-coin coins-animate' src='./home-cards/coin.png' alt='coin'></img>
            <img className='third-coin coins-animate' src='./home-cards/coin.png' alt='coin'></img>
            <img className='fourth-coin coins-animate' src='./home-cards/coin.png' alt='coin'></img>
            <img className='fifth-coin coins-animate' src='./home-cards/coin.png' alt='coin'></img>
            <img className='sixth-coin coins-animate' src='./home-cards/coin.png' alt='coin'></img>
          </div>

        </div>
      </div>
      <section className='container'>
        <div className='our-services-text'>
          {/* <p>Добейтесь большего успеха: продвигайте свой бизнес в интернете с профессионалами</p> */}
          <p className='header-service'><strong>Добейтесь большего успеха: продвигайте свой бизнес в интернете с профессионалами</strong></p>
          <p className='text-service'>Мы предлагаем профессиональное продвижение вашего 
          бизнеса в онлайн-пространстве, чтобы вы могли сфокусироваться на своей основной деятельности, а мы 
          заботились о том, чтобы ваш бизнес был успешен в интернете.</p>
        </div>
        <div className='our-services-item'>
            <div className='our-services-card'>
            <a href='/develop'>
                <div className='circle-web-development circle-item-cards'>
                  <div  className='circle-white-cards'>
                    <img src='web-development.png' height={25} alt='web-development'></img>
                  </div> 
                </div>
                <p className='service-header-text'><strong>Веб разработка</strong> 
                  <img src='./home/open.png' alt='open' className='open-service-card'></img>
                </p>
                <p className='serhice-card-text'>
                Услуга веб-разработки включает создание, дизайн, тестирование и деплоймент веб-сайтов, приложений и интернет-магазинов для клиентов.</p>
            </a>
            </div>

            <div className='our-services-card'>
            <a href='/design'>
                <div className='circle-paint-palette circle-item-cards'>
                  <div  className='circle-white-cards'>
                    <img src='paint-palette.png' height={25} alt='paint-palette'></img>
                  </div> 
                </div>
                <p className='service-header-text'><strong>Графический дизайн</strong>
                  <img src='./home/open.png' alt='open' className='open-service-card'></img>
                </p>
                <p className='serhice-card-text'>- дизайн, связанный с созданием графических элементов, таких как логотипы, постеры, 
                упаковка, рекламные баннеры и т.д.</p>
            </a>
            </div>

            <div className='our-services-card'>
            <a href='/design'>
                <div className='circle-ui-design circle-item-cards'>
                  <div  className='circle-white-cards'>
                    <img src='ui-design.png' height={26} alt='ui-ux-design'></img>
                  </div> 
                </div>
                <p className='service-header-text'><strong>UI/UX дизайн</strong>
                  <img src='./home/open.png' alt='open' className='open-service-card'></img>
                </p>
                <p className='serhice-card-text'>- дизайн, связанный с созданием веб-сайтов, интерфейсов и приложений для мобильных устройств.</p>
            </a>
            </div>

            <div className='our-services-card'>
            <a href='/advirsing'>
                <div className='circle-targeted-marketing circle-item-cards'>
                  <div  className='circle-white-cards'>
                    <img src='targeted-marketing.png' height={26} alt='targeted-marketing'></img>
                  </div> 
                </div>
                <p className='service-header-text'><strong>Таргетированная реклама</strong>
                  <img src='./home/open.png' alt='open' className='open-service-card'></img>
                </p>
                <p className='serhice-card-text'>Услуга таргетированной рекламы включает настройку рекламных кампаний, которые показываются выбранной 
                аудитории на основе их интересов и поведения.</p>
            </a>
            </div>

            <div className='our-services-card'>
            <a href='/advirsing'>
                <div className='circle-contextual-advertising circle-item-cards'>
                  <div  className='circle-white-cards'>
                    <img src='contextual-advertising.png' height={26} alt='contextual-advertising'></img>
                  </div> 
                </div>
                <p className='service-header-text'><strong>Контекстная реклама</strong>
                  <img src='./home/open.png' alt='open' className='open-service-card'></img>
                </p>
                <p className='serhice-card-text'>Услуга контекстной рекламы включает создание рекламных объявлений, которые показываются в результатах поиска 
                в соответствии с ключевыми словами.</p>
            </a>
            </div>
            
            <div className='our-services-card'>
            <a href='/smm'>
                <div className='circle-social-media circle-item-cards'>
                  <div  className='circle-white-cards'>
                    <img src='social-media.png' height={27} alt='social-media'></img>
                  </div> 
                </div>
                <p className='service-header-text'><strong>Smm Маркетинг</strong>
                  <img src='./home/open.png' alt='open' className='open-service-card'></img>
                </p>
                <p className='serhice-card-text'>Услуга SMM-маркетинга включает создание контента и управление социальными сетями для продвижения бренда и 
                привлечения потенциальных клиентов.</p>
            </a>
            </div>
        </div>
      </section>
      <CallUs/>
      <section className='container'>
        <div className='our-case-home'>
        <p>Наши проекты</p>
        <div className='btn-case-home'>
          <div className='btn-develop-case'></div>
          <div className='btn-smm-case'></div>
          <div className='btn-advertising-case'></div>
          <div className='btn-design-case'></div>
        </div>
        <div className='item-case-home'></div>
        <div className='item-case-home'></div>
        <div className='item-case-home'></div>
        <div className='item-case-home'></div>
        </div>
        <div className='reviews-home'>
        <p>Отзывы наших клиентов</p>
        </div>
        <div className='our-tools'>

        </div>
      </section>
      </>
  );
}
};
 
export default Home;