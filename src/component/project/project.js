import React, { useState, useEffect } from 'react';
import './project.scss';
import './parallax.scss';
import Snowfall from 'react-snowfall'




const OurProject = () => {
  const [nameProject, setNameProject] = useState('Develop');

  
  const updateMousePosition = (e) => {
      const y = e.clientY - (window.innerHeight * 0.5) ,
      x = e.clientX - (window.innerWidth * 0.5) ;
      // console.log(x, y);
      document.documentElement.style.setProperty('--mouse-x', (`${x}deg`) );
      document.documentElement.style.setProperty('--mouse-y', (`${y}deg`));
  }

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
    // Your logic for loading more projects
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
                  <div className='develop-sec-layer3 img-props'></div>
                  <div className='develop-sec-layer3-btn img-props'></div>
                </div>
              </div>
          </div>
        </>
      );
    } else {
      return <h1>{nameProject}</h1>;
    }
  };

  return (
    <div className='project-section'>
      <div className='project-header'>Наши проекты</div>
      <div className='project-names'>
        <p className='project-name' data-name='Develop' onClick={() => designClick('Develop')}>
          Web-разработка
        </p>
        <p className='project-name' data-name='Design' onClick={() => designClick('Design')}>
          Дизайн
        </p>
        <p className='project-name' data-name='Advertising' onClick={() => designClick('Advertising')}>
          Таргетированная реклама
        </p>
        <p className='project-name' data-name='SMM' onClick={() => designClick('SMM')}>
          SMM
        </p>
      </div>
      <div className='project-main'>
        {setMain()}
        <div className='load-more-container'>
          <div onClick={onLoadProject} className='load-more'>
            больше проектов
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
