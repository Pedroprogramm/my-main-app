import React, { useEffect, useState} from 'react';
import './stage-our-work.scss';

function Stages() {
    const [rocketStageActive, setRocketStageActive] = useState(1);
    const [rocketActive, setRocketActive] = useState(false);

    function filterClasses(element, classNames) {
      const classes = Array.from(element.classList);
      const filteredClasses = classes.filter(className => className === `${classNames}`);
      element.className = filteredClasses.join(' ');
    }


    function activeRocket(i) {
        let currentIndex = i;
        let currentIndexFire = i;
          let interval;
          let intervals;
          
          function togglePoleImage() {
            
            const poleImages = [
                'fly-rocket1',
                'fly-rocket2',
                'fly-rocket3',
                'fly-rocket4',
                'fly-rocket5'
              ];
            const rocketFly = document.querySelectorAll('.fly-rocket');
            const currentPoleImage = poleImages[currentIndex];
          
            rocketFly[i].classList.add(currentPoleImage);
            poleImages.forEach((imageClass, index) => {
              if (index !== currentIndex) {
                rocketFly[i].classList.remove(imageClass);
              }
            });
          
            currentIndex = (currentIndex + 1) % poleImages.length; 
          }

          function toggleFire () {
            
            const fireImage = [
                'fire-rocket1',
                'fire-rocket2',
                'fire-rocket3',
                'fire-rocket4',
            ],
            fire = document.querySelector('.fire-active');

            fire.classList.add(fireImage[currentIndexFire]);
            fireImage.forEach((imageClass, index) => {
                if (index !== currentIndexFire) {
                    fire.classList.remove(imageClass);
                }
              });
              currentIndexFire = (currentIndexFire + 1) % fireImage.length; 
          }
          if (i === 0) {
            intervals = setInterval(toggleFire, 200);
          }
          
          
          function startAnimation() {
            interval = setInterval(togglePoleImage, 100);
          }
          
          function stopAnimation() {
            clearInterval(interval);
            clearInterval(intervals);
          }
          
          startAnimation();
          setTimeout(stopAnimation, 1900);           
        }

    function onCircleStage (e) {
      function addClassesWithInterval(className, count, interval) {
        for (let j = rocketStageActive; j <= count; j++) {
          setTimeout(() => {
            rocketStages.classList.add(`right-${j}-rocket`);
          }, j * interval);
        }
      }
      const rocketStages = document.querySelector('.rocket-stages');

        document.documentElement.style.setProperty('--animation-delay', '-110ms');

        if (e < rocketStageActive){
          if (rocketStageActive - e === 1) {
            filterClasses(rocketStages, 'rocket-stages');
            rocketStages.classList.add(`left-${e}-rocket`);
          }
        } else if (e > rocketStageActive) {
          if (e - rocketStageActive === 1) {
            filterClasses(rocketStages, 'rocket-stages');
            rocketStages.classList.add(`right-${e}-rocket`);
          } else {
            const i = e - rocketStageActive;
            rocketStages.classList.add(`right-${rocketStageActive}-rocket`);

            addClassesWithInterval(`right-${e}-rocket`, i, 1892);

          }
          
          // setTimeout(() => {
          //   setRocketActive(rocketStages.classList.add(`right-${rocketStageActive + 1}-rocket`));
          // }, 1892);
        }
        setRocketStageActive(e)
      }

    useEffect( () => {
       if (rocketActive) {
        activeRocket(0)
        activeRocket(1)
       } else {
        const rocketFly = document.querySelectorAll('.fly-rocket'),
        rocketFire = document.querySelector('.fire-active');

        filterClasses(rocketFly[0], 'fly-rocket');
        filterClasses(rocketFly[1], 'fly-rocket');
        filterClasses(rocketFire, 'fire-active');

       }
    })


    
    function onActiveRightRocket() {
        if (rocketStageActive <= 5 && !rocketActive) {
        setRocketStageActive(prevStage => prevStage + 1);    
        const rocketStages = document.querySelector('.rocket-stages');
        filterClasses(rocketStages, 'rocket-stages');

        rocketStages.classList.add(`right-${rocketStageActive}-rocket`);
        
        setRocketActive(true);
        
        setTimeout(() => {
            setRocketActive(false);
          }, 1950);
          
        console.log(rocketStageActive);
        }
      }
      
    function onActiveLeftRocket() {
        if (rocketStageActive >= 2 && !rocketActive) {
        setRocketStageActive(prevStage => prevStage - 1);
        document.querySelector('.rocket-stages').classList.add('left-1-rocket');
        setRocketActive(true)
        setTimeout(() => {
            setRocketActive(false);
          }, 1950);
          
        const rocketStages = document.querySelector('.rocket-stages');
        filterClasses(rocketStages, 'rocket-stages');

        console.log(rocketStageActive);
        
        rocketStages.classList.add(`left-${rocketStageActive - 1}-rocket`);
        
        setRocketActive(true);
        }
    }
    
    return (
        <div className='stage-main'>
            <div className='rocket-stage-container'>
                <div className='circle-container'>
                    <div className='rocket-stages'>
                        <div className='fire-active'></div>
                        <div className='fly-rocket'></div>
                        <div className='fly-rocket'></div>
                    </div>
                    <div className="circle-stage" onClick={() => onCircleStage(1)}>
                        <div className="donut-stage"></div>
                    </div>
                    <div className="circle-stage" onClick={() => onCircleStage(2)}>
                        <div className="donut-stage"></div>
                    </div>
                    <div className="circle-stage" onClick={() => onCircleStage(3)}>
                        <div className="donut-stage"></div>
                    </div>
                    <div className="circle-stage" onClick={() => onCircleStage(4)}>
                        <div className="donut-stage"></div>
                    </div>
                    <div className="circle-stage" onClick={() => onCircleStage(5)}> 
                        <div className="donut-stage"></div>
                    </div>
                    <div className="circle-stage" onClick={() => onCircleStage(6)}>
                        <div className="donut-stage"></div>
                    </div>
                    <div className='way-rocket-1 way-rocket'></div>
                    <div className='way-rocket-2 way-rocket'></div>
                    <div className='way-rocket-3 way-rocket'></div>
                    <div className='way-rocket-4 way-rocket'></div>
                    <div className='way-rocket-5 way-rocket'></div>
                </div>
            </div>
            <div className='main-stage-container'>
            <div className='contain-left-stage' onClick={onActiveLeftRocket}> 
                <div className='left-arrow-stage'></div>
            </div>
            <div className='main-stage'>
              <div className='text-stage'>
                <div className='frst-text-stage'>
                  <div className='header-frst-text'>
                  Брифинг
                  </div>
                </div>
                <div className='sec-text-stage'>
                  <div className='header-frst-text'>
                  Брифинг
                  </div>
                </div>
              </div>
              <div className='gif-stage'>

              </div>
            </div>
            <div className='contain-right-stage' onClick={onActiveRightRocket}>
                <div className='right-arrow-stage'></div>
            </div>
            
            </div>
        </div>
    );
}

export default Stages;
