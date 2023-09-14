import React, {useEffect, useState} from 'react';
import Snowfall from 'react-snowfall'

const MainComponent = ({ nameProject, allProject, onLoadProject }) => {
    const handleMouseEnter = (e) => {
        const button = e.target;
        const span = button.querySelector("span");
      
        if (span) {
          let parentOffset = button.getBoundingClientRect(),
              relX = e.clientX - parentOffset.left,
              relY = e.clientY - parentOffset.top;
      
          span.style.top = relY + "px";
          span.style.left = relX + "px";
        }
      };
      
      const handleMouseLeave = (e) => {
        const button = document.querySelector(".btn-ripple");
        const span = button.querySelector("span");
        if (span) {
          let parentOffset = button.getBoundingClientRect(),
              relX = e.clientX - parentOffset.left,
              relY = e.clientY - parentOffset.top;
              console.log(relY, relX)
          span.style.top = relY + "px";
          span.style.left = relX + "px";
        }
      };
      
    
    //   useEffect(() => {
    //     const buttons = document.querySelectorAll(".btn-ripple");
    
    //     buttons.forEach((button) => {
    //       button.addEventListener("mouseenter", handleMouseEnter);
    //       button.addEventListener("mouseleave", handleMouseLeave);
    //     });
    
    //     return () => {
    //       buttons.forEach((button) => {
    //         button.removeEventListener("mouseenter", handleMouseEnter);
    //         button.removeEventListener("mouseleave", handleMouseLeave);
    //       });
    //     };
    //   }, []);
  if (nameProject === 'Develop') {
    return (
    <>
    <div className='develop project-container'>
        <div className='parallax'>
            <div className='project'>
            <div className='develop-frst-layer1'></div>
              <div className='develop-frst-layer2'></div>
              <div className="blur-circles frst-blur-circle"></div>
              <div className="blur-circles sec-blur-circle"></div>
              <div className='develop-frst-layer3'></div>
              <div className='scania'></div>
            </div>
        <div className='text-project'>
            <p className='name-project'>Вывоз мусора</p>
            <p className='description-project'>Эффективное удаление отходов</p>
        </div>
        </div>
            <div className='parallax'>
                <div className='project'>
                  <div className='develop-sec-layer1 img-props'></div>
                  <Snowfall />
                  <div className='develop-sec-layer2 img-props'></div>
                  <div className='develop-sec-blur circle-blur-1'></div>
                  <div className='develop-sec-blur circle-blur-2'></div>
                  <div className='develop-sec-blur circle-blur-3'></div>
                  <div className='develop-sec-blur circle-blur-4'></div>
                  <div className='develop-sec-blur circle-blur-5'></div>
                  <div className='develop-sec-layer3 img-props'></div>
                  <div className='develop-sec-layer3-btn img-props'></div>
                </div>
        <div className='text-project'>
            <p className='name-project'>ModulDom</p>
            <p className='description-project'>Модульные решения для жилья </p>
        </div>
            </div>
        
        {allProject ? (
            <>
          <div className='parallax'>
            <div className='project'>
            <div className='text-project'>
                <p className='name-project'>ModulDom</p>
                <p className='description-project'>Модульные решения для жилья </p>
            </div>
            </div>
          </div>
          <div className='parallax'>
            <div className='project'>
            <div className='text-project'>
                <p className='name-project'>ModulDom</p>
                <p className='description-project'>Модульные решения для жилья </p>
            </div>
            </div>
          </div>
          </>
          
        ) : (
          <div className='load-more-container'>
            <a className='btn-ripple' onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={onLoadProject}>
              <a>больше проектов</a>
              <span></span>
            </a>
          </div>
        )}
        </div>
      </>
      
    );
  } else if(nameProject === 'Design') {
    return (
    <>
        <div className='parallax'>
            <div className='project'>
            <div className='text-project'>
                <p className='name-project'>ModulDom</p>
                <p className='description-project'>Модульные решения для жилья </p>
            </div>
            </div>
        </div>
    </> )
  } else if(nameProject === 'Advertising'){

  } else if(nameProject === 'SMM'){

  } else {
    return <h1>SomeoneErorr</h1>;
  }
};

export default MainComponent;
