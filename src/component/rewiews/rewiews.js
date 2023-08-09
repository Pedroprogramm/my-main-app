import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import React from 'react';
import './rewiews.scss';

const Rewiews = () =>{
    const [count, setCount] = useState(1);
    const [countHide, setCountHide] = useState(4);
    const [MouseEnter, setMouseEnter] = useState(false);

    const allSlide = document.querySelectorAll('.reviews-card-item'),
    arrowReviews = document.querySelectorAll('.arrow-reviews');

    const handlers = useSwipeable({
      onSwipedLeft: () => {
        LeftSlide ()
      },
      onSwipedRight: () => {
        RightSlide ()
      },
    });

    function circleCollor (count) {
        const circle = document.querySelectorAll('.circle-item-reviews');
        circle.forEach((item) => {
          item.classList.remove('active-circle-reviews')
        })
        circle[count].classList.add('active-circle-reviews')
    }

    useEffect(
      () => {
      if (!MouseEnter) {
        const effectSlide = () => {
          if (countHide > 1) {
            if (countHide < 4) {
              allSlide[countHide].style.zIndex = 4 - countHide;
            }
            setCountHide(countHide - 1);
            allSlide[countHide - 1].classList.remove('active-slides');
            circleCollor (countHide - 1)
          }
          if (countHide === 1) {
            setCountHide(4);
            setCount(1);
            circleCollor (countHide - 1)
          }
        };
      
        if (count < 4) {
          const interval = setInterval(() => {
            LeftSlide();
          }, 4000);
          return () => {
            clearInterval(interval);
          };
        } else if (count === 4) {
          if (countHide === 4) {
            const interval = setInterval(() => {
              effectSlide();
            }, 5000);
            return () => {
              clearInterval(interval);
            };
          } else if (countHide < 4) {
            const interval = setInterval(() => {
              effectSlide();
            }, 500);
            return () => {
              clearInterval(interval);
            };
          }
        }
      }
      
    }, [count, countHide, LeftSlide, allSlide, MouseEnter]);

    const onCircleClick = (e) => {
      const circles = document.querySelectorAll('.circle-item-reviews');
      const clickedCircle = e.target;
      const clickedIndex = Array.from(circles).indexOf(clickedCircle) + 1;
    
      const indexHigh = () => {
        if (count < clickedIndex) {
          LeftSlide();
          setCount((prevCount) => prevCount + 1);
          if (count < clickedIndex) {
            setTimeout(indexHigh, 500);
          } else if (count === clickedIndex) {
            console.log('1');
          }
        }
      };
    
      const indexLow = () => {
        if (count > clickedIndex) {
          RightSlide();
          setCount((prevCount) => prevCount - 1);
          if (count > clickedIndex) {
            setTimeout(indexLow, 500);
          } else if (count === clickedIndex) {
            console.log('2');
          }
        }
      };
    
      if (clickedIndex > count) {
        indexHigh();
      }
      if (clickedIndex < count) {
        indexLow();
      }
    };
    
    
    function LeftSlide () {
      if (count < 4) {
        circleCollor(count)
      allSlide[count].classList.add('active-slides');
      setCount(count + 1);
      if (count < 3) {
          setTimeout(() => {
              allSlide[count + 1].style.zIndex = count + 2;
            }, 700);
      } 
    }
    }

    function RightSlide () {
      if (count > 1) {
          if (count < 4) {
            allSlide[count].style.zIndex = 4 - count;
        }
        setCount(count - 1);
        circleCollor(count - 2)
        allSlide[count - 1].classList.remove('active-slides')  
  }
    }

    const OnSlideRewiews = (e) => {     
        if (e.target.classList.contains('left-arrow-reviews')) {
          LeftSlide();
        } else {
          RightSlide();
        }
    }

    const  onMouseEnter = () => {
      setMouseEnter(true);
      arrowReviews.forEach(item => 
        item.classList.add('-hover')
      ) 
    }
    const  onMouseLeave = () => {
      setMouseEnter(false);
      arrowReviews.forEach(item => 
        item.classList.remove('-hover')
      )  
    }

    return (
        <div className='reviews-home' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <p>Отзывы наших клиентов</p>
        <div className='reviews-cards' {...handlers}>
        <div onClick={OnSlideRewiews} className='left-arrow-reviews arrow-reviews'></div>
          <div className='reviews-card-item'>
            <div className='reviews-card-header'>
            <img src='./home/reviews1.png' alt='reviews' className='reviesws-card-photo'></img>
            <div className='reviews-header-text'>MasterDrewno111</div>
            </div>
            <div className='reviews-card-text'>
            Я хотел бы поделиться своим впечатлением об услуге создания сайта, предоставленной этой компанией. С самого начала я был 
            впечатлен профессионализмом и отзывчивостью команды разработчиков. Они были внимательны к моим потребностям и предложили 
            множество творческих решений для улучшения дизайна и функциональности моего сайта. В целом, я очень доволен результатом и 
            рекомендую эту компанию всем, кто ищет надежного партнера для создания сайта.
            </div>
            <a href='/develop' className='reviews-about-service'>Услуга 'Создание сайта'</a>
          </div>
          <div className='reviews-card-item '>
          <div className='reviews-card-header'>
            <img src='./home/reviews1.png' alt='reviews' className='reviesws-card-photo'></img>
            <div className='reviews-header-text'>MasterDrewno222</div>
            </div>
            <div className='reviews-card-text'>
            Я хотел бы поделиться своим впечатлением об услуге создания сайта, предоставленной этой компанией. С самого начала я был 
            впечатлен профессионализмом и отзывчивостью команды разработчиков. Они были внимательны к моим потребностям и предложили 
            множество творческих решений для улучшения дизайна и функциональности моего сайта. В целом, я очень доволен результатом и 
            рекомендую эту компанию всем, кто ищет надежного партнера для создания сайта.
            </div>
            <a href='/develop' className='reviews-about-service'>Услуга 'Создание сайта'</a>
          </div>
          <div className='reviews-card-item hide-rewiews-item'>
          <div className='reviews-card-header'>
            <img src='./home/reviews1.png' alt='reviews' className='reviesws-card-photo'></img>
            <div className='reviews-header-text'>MasterDrewno333</div>
            </div>
            <div className='reviews-card-text'>
            Я хотел бы поделиться своим впечатлением об услуге создания сайта, предоставленной этой компанией. С самого начала я был 
            впечатлен профессионализмом и отзывчивостью команды разработчиков. Они были внимательны к моим потребностям и предложили 
            множество творческих решений для улучшения дизайна и функциональности моего сайта. В целом, я очень доволен результатом и 
            рекомендую эту компанию всем, кто ищет надежного партнера для создания сайта.
            </div>
            <a href='/develop' className='reviews-about-service'>Услуга 'Создание сайта'</a>
          </div>
          <div className='reviews-card-item hide-rewiews-item'>
          <div className='reviews-card-header'>
            <img src='./home/reviews1.png' alt='reviews' className='reviesws-card-photo'></img>
            <div className='reviews-header-text'>MasterDrewno444</div>
            </div>
            <div className='reviews-card-text'>
            Я хотел бы поделиться своим впечатлением об услуге создания сайта, предоставленной этой компанией. С самого начала я был 
            впечатлен профессионализмом и отзывчивостью команды разработчиков. Они были внимательны к моим потребностям и предложили 
            множество творческих решений для улучшения дизайна и функциональности моего сайта. В целом, я очень доволен результатом и 
            рекомендую эту компанию всем, кто ищет надежного партнера для создания сайта.
            </div>
            <a href='/develop' className='reviews-about-service'>Услуга 'Создание сайта'</a>
          </div>
          <div className='reviews-card-item hide-rewiews-item'>
          <div className='reviews-card-header'>
            <img src='./home/reviews1.png' alt='reviews' className='reviesws-card-photo'></img>
            <div className='reviews-header-text'>MasterDrewno555</div>
            </div>
            <div className='reviews-card-text'>
            Я хотел бы поделиться своим впечатлением об услуге создания сайта, предоставленной этой компанией. С самого начала я был 
            впечатлен профессионализмом и отзывчивостью команды разработчиков. Они были внимательны к моим потребностям и предложили 
            множество творческих решений для улучшения дизайна и функциональности моего сайта. В целом, я очень доволен результатом и 
            рекомендую эту компанию всем, кто ищет надежного партнера для создания сайта.
            </div>
            <a href='/develop' className='reviews-about-service'>Услуга 'Создание сайта'</a>
          </div>
          <div  onClick={OnSlideRewiews} className='right-arrow-reviews arrow-reviews'></div>
        </div>
        <div className='circle-home-reviews'>
          <span className='circle-item-reviews active-circle-reviews' onClick={onCircleClick}></span>
          <span className='circle-item-reviews' onClick={onCircleClick}></span>
          <span className='circle-item-reviews' onClick={onCircleClick}></span>
          <span className='circle-item-reviews' onClick={onCircleClick}></span>
        </div>
        </div>
    );
}

export default Rewiews;

