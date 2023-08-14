import React, { useState, useEffect } from 'react';
import './project.scss';
import './parallax.scss';
import Snowfall from 'react-snowfall'




const OurProject = () => {
  const [nameProject, setNameProject] = useState('Develop'),
  [resourcesLoaded, setResourcesLoaded] = useState(false),
  [allProject, setAllProject] = useState(false);


  const updateMousePosition = (e) => {
      const y = e.clientY - (window.innerHeight * 0.5) ,
      x = e.clientX - (window.innerWidth * 0.5) ;
      // console.log(x, y);
      document.documentElement.style.setProperty('--mouse-x', (`${x}deg`) );
      document.documentElement.style.setProperty('--mouse-y', (`${y}deg`));
  }

  useEffect(() => {
      setResourcesLoaded(true);
  }, []);
  

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    const updateProject = () => {
      document.querySelectorAll('.project-name').forEach((name) => {
        if (name.getAttribute('data-name') === nameProject) {
          name.classList.add('active-project-name');
        } else {
          name.classList.remove('active-project-name');
        }
      });
    }
  
    updateProject();
  }, [nameProject]);
  

  const designClick = (name) => {
    setNameProject(name);
  };

  const onLoadProject = () => {
    setAllProject(true);
  };

  const setMain = () => {
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
              </div>
          </div>
          { allProject ? <h1> ALLALLALL</h1> : 
          <div className='load-more-container'>
            <div onClick={onLoadProject} className='load-more'>
              больше проектов
            </div>
          </div>  }
        </>
      ) ;
    } else {
      return <h1>{nameProject}</h1>;
    }
  };

  return (
    <div className='project-section'>
      <div className='project-header'>Наши проекты</div>
      <div className='project-names'>
        <p className='project-name underline-one' data-name='Develop' onClick={() => designClick('Develop')}>
          Web-разработка
        </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="active-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
          </svg>
        <p className='project-name underline-one' data-name='Design' onClick={() => designClick('Design')}>
          Дизайн
        </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="active-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
          </svg>
        <p className='project-name underline-one' data-name='Advertising' onClick={() => designClick('Advertising')}>
          Таргетированная реклама
        </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="active-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
          </svg>
        <p className='project-name underline-one' data-name='SMM' onClick={() => designClick('SMM')}>
          SMM
        </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="active-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
          </svg>
      </div>
      <div className='project-main'>
        {/* {setMain()} */}
    {resourcesLoaded ? setMain() : <div style={{ display: 'flex' }}>
      <div className='gray-preloader'></div>
      <div className='gray-preloader'></div>
    </div>}
      </div>
    </div>
  );
};

export default OurProject;
