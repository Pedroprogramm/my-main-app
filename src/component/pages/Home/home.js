import React from 'react';
import { Component} from 'react';

import './home.scss';
import './scrollAnimate.scss';
import CallUs from '../Developer/call-us/callUs';
import Rewiews from '../../rewiews/rewiews';
import OurProject from '../../project/project';
 
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sExpanded : false,
      isLoaded: false
    }
  }

  componentDidMount() {
    // this.updateAnswers();
    window.addEventListener('scroll', this.animateServices);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.animateServices);
  }
  // componentDidUpdate() {
  //   this.updateAnswers();
  // }

  animateServices() {
    const scroll = window.pageYOffset
    const item = document.querySelectorAll('.our-services-card');
    if (scroll > 387) {
      item.forEach((item, index) => {
        if (index < 3){
          item.classList.add('animate-services-card');
        }
      })
    } 
    if (scroll > 697) {
      item.forEach((item, index) => {
        if (index >= 3){
          item.classList.add('animate-services-card');
        }
      })
    }
    // console.log(scroll)
  }

  // updateOpacity() {
  //   const sqare = document.querySelector(`.black-square`),
  //         insqare = document.querySelector(`.cards-home`);
  //   // setTimeout sqare.style.opacity = 0;
  // }

  // updateAnswers() {
  //   const hiddenAnswer = document.querySelectorAll('.answer-hidden');
  //   // const showAnswers = document.querySelector('.show-answers');
  //   if (hiddenAnswer.length === 0) {
  //     this.setState(() => ({
  //       isExpanded: true, // Инвертируем значение состояния
  //     }));
  //   } 
  //   // else if (hiddenAnswer.length > 0){
  //   //   this.setState(() => ({
  //   //     isExpanded: false, // Инвертируем значение состояния
  //   //   }));
  //   // }
  //   // console.log('1');
  // }

  

  // onClickAnswers (e) {
  //   const quest = document.querySelectorAll('.question');
  //   const answer = document.querySelectorAll('.answer'),
  //   arrow = document.querySelectorAll('.faq-down-arrow');
  //   function answerSearch (item) {
  //     item.forEach((item, index) => {
  //       if (item === e.target) {
  //         arrow[index].classList.toggle('faq-arrow-active');
  //         answer[index].classList.toggle('answer-hidden')
  //         console.log(index)
  //       }
  //     })
  //    }
  //   if(e.target.classList.contains('question')){
  //     answerSearch(quest);
  //   } else if(e.target.classList.contains('faq-down-arrow')) {
  //     answerSearch(arrow)
  //   }
    
  // }

  // onVisHiddAnswer () {
  //   const allAnswer = document.querySelectorAll('.answer'),
  //   hiddenAnswer = document.querySelectorAll('.answer-hidden');
  //   const showAnswers = document.querySelector('.show-answers');
  //   allAnswer.forEach(item => {
  //     item.classList.toggle('answer-hidden');
  //   })
  //   if (hiddenAnswer.length === 0) {
  //     showAnswers.innerHTML = 'Развернуть все ответы';
  //   } else {
  //     showAnswers.innerHTML = 'Свернуть все ответы';
  //   }
  // }

render () {
  return (
    <>
      <div className='purple-back'></div>
      <div className='black-square animate-test'>
        <div className='header-text-square'>
          {/* <strong>Добейтесь большего успеха: продвигайте свой бизнес в интернете с профессионалами</strong> */}
      <video className='head-home-video' autoPlay muted width='100%' height='100%'>
        <source src='/home/header-text-animation.webm' type='video/webm' />
      </video>
      <div className='watermark'></div>
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
        <div className='faq'>
          {/* <div className='header-faq'>
            <p className='faq-header'><strong>FAQ</strong></p>
            <div className='show-answers' onClick={this.onVisHiddAnswer}> {this.state.isExpanded ? 'Свернуть все ответы' : 'Развернуть все ответы'}</div>
          </div>
          <div className='faq-main'>
            <div className='faq-developer-section faq-section'>
              <div className='question' onClick={this.onClickAnswers}>
              Сколько времени занимает разработка сайта?
              <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
              </div>
              <div className='answer answer-hidden'>
              Время разработки сайта зависит от сложности проекта и его требований. 
              Простые сайты могут быть разработаны в течение нескольких недель, в то 
              время как более сложные проекты могут занимать несколько месяцев. Точные 
              сроки будут оговорены в процессе обсуждения вашего проекта.
              </div>
          
              <div className='question' onClick={this.onClickAnswers}>
              Предоставляете ли вы поддержку и обслуживание сайта после его разработки?
              <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
              </div>
              <div className='answer answer-hidden'>
              Да, мы предоставляем услуги по поддержке и обслуживанию сайтов
              </div>
              
              <div className='question' onClick={this.onClickAnswers}>
              Какова стоимость разработки сайта?
              <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
              </div>
              <div className='answer answer-hidden'>
              Стоимость разработки сайта зависит от множества факторов, включая его размер, сложность функционала, 
              дизайн, интеграции с другими системами и т.д. Чтобы получить точную стоимость, рекомендуется связаться 
              с нами для обсуждения ваших требований и получения индивидуального предложения.
              </div>

            </div>

            <div className='faq-developer-section faq-section'>

            <div className='question-smm question' onClick={this.onClickAnswers}>
            Какой эффект может дать профессиональное оформление моего профиля в Инстаграме?
            <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
            </div>
            <div className='answer answer-hidden'>
            Профессиональное оформление профиля в Инстаграме помогает создать привлекательный и согласованный образ 
            вашего бренда или бизнеса. Оно может повысить уровень доверия у ваших потенциальных клиентов, привлечь больше 
            подписчиков и увеличить вовлеченность аудитории.
            </div>

            <div className='question-smm question' onClick={this.onClickAnswers}>
            Можете ли вы предоставить мне исходные файлы после оформления профиля?
            <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
            </div>
            <div className='answer answer-hidden'>
            Да, по вашему запросу мы можем предоставить вам исходные файлы, такие как логотипы, обложки профиля и другие элементы дизайна. 
            Вы сможете использовать их в будущем для различных целей.
            </div>

            <div className='question-smm question' onClick={this.onClickAnswers}>
            Как часто мне нужно обновлять контент на моем инстаграме?
            <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
            </div>
            <div className='answer answer-hidden'>
            Регулярное обновление контента важно для поддержания активности и привлечения внимания вашей аудитории. Обычно рекомендуется 
            публиковать новый контент несколько раз в неделю. Однако частота обновления может варьироваться в зависимости от вашей отрасли, 
            аудитории и целей. Мы поможем вам определить оптимальное расписание публикаций для вашего инстаграма.
            </div>
            </div>

            <div className='faq-developer-section faq-section'>

            <div className='question-target question' onClick={this.onClickAnswers}>
            Как определить эффективность таргетированной рекламы?
            <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
            </div>
            <div className='answer answer-hidden'>
            Для определения эффективности таргетированной рекламы вы можете использовать различные метрики, такие как количество просмотров, 
            кликов, конверсий, стоимость конверсии и т.д. Кроме того, вы можете отслеживать поведение аудитории, вовлеченность и оценки результатов
            вашей рекламной кампании.
            </div>

            <div className='question-target question' onClick={this.onClickAnswers}>
            Как определить бюджет для таргетированной рекламы?
            <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
            </div>
            <div className='answer answer-hidden'>
            Определение бюджета для таргетированной рекламы зависит от ваших целей, конкурентности рынка и ресурсов, которые вы готовы вложить 
            в рекламу. Рекомендуется начать с определения максимального допустимого расхода на рекламу и затем оптимизировать бюджет на основе 
            результатов и отклика аудитории.
            </div>

            <div className='question-target question' onClick={this.onClickAnswers}>
            Какие форматы объявлений можно использовать в таргетированной рекламе?
            <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
            </div>
            <div className='answer answer-hidden'>
            В таргетированной рекламе вы можете использовать различные форматы объявлений, включая изображения, видео, карусели, слайд-шоу, 
            коллажи и многое другое.
            </div>
            </div>

            <div className='faq-developer-section faq-section'>

            <div className='question-design question' onClick={this.onClickAnswers}>
            Что включает в себя процесс разработки дизайна визиток и логотипов?
            <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
            </div>
            <div className='answer answer-hidden'>
            Процесс разработки дизайна визиток и логотипов включает в себя несколько этапов. Вначале проводится брифинг, где вы обсуждаете свои 
            предпочтения, цели, аудиторию и стиль вашего бизнеса. Затем дизайнер создает несколько концепций, которые вы рассматриваете и даете 
            обратную связь. После этого происходит итеративный процесс уточнения и доработки до достижения окончательного дизайна.
            </div>

            <div className='question-design question' onClick={this.onClickAnswers}>
            Можете ли вы создать дизайн, который будет соответствовать моему бюджету?
            <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
            </div>
            <div className='answer answer-hidden'>
            Да, мы готовы работать с различными бюджетами и предлагаем разные пакеты услуг в зависимости от ваших потребностей. Обсудите свой бюджет 
            с нами, и мы постараемся предложить вам оптимальное решение.
            </div>

            <div className='question-design question' onClick={this.onClickAnswers}>
            Что происходит, если мне не нравится предложенный дизайн?
            <img src='./home/faq-arrow.png' onClick={this.onClickAnswers} alt='down-arrow' className='faq-down-arrow'></img>
            </div>
            <div className='answer answer-hidden'>
            Важно для нас, чтобы вы были полностью удовлетворены результатом. Поэтому мы предоставляем возможность обсудить ваши пожелания и 
            предложения, чтобы внести необходимые изменения и доработки до того, как вы будете довольны окончательным результатом.
            </div>
            </div>
          </div> */}
          <div className='faq-contain faq-develop'>
          <span>
            <div className='giffs-develop'></div>
            <ul className='questions-develop'>
              <li className='quesion-develop-frst'>31231</li>
              <li className='quesion-develop-sec'>23313</li>
              <li className='quesion-develop-third'>1321312</li>
            </ul>
            </span>
            <div className='answer-develop'></div>
          </div>
          <div className='faq-contain faq-develop'></div>
          <div className='faq-contain faq-develop'></div>
          {/* <div className='faq-contain faq-develop'></div> */}
        </div>
        <div className='our-case-home'>
        <OurProject/>
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
        <Rewiews/>
        <div className='our-tools'>

        </div>
      </section>
    </>
  );
}
};
 
export default Home;