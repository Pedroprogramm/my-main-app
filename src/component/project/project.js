import React, { useState, useEffect, lazy, Suspense } from 'react';
import './project.scss';
import './parallax.scss';
import throttle from 'lodash/throttle';
// import MainComponent from './set-main';

const MainComponent = lazy(() => import('./set-main'));

const OurProject = () => {
  const [nameProject, setNameProject] = useState('Develop'),
  [resourcesLoaded, setResourcesLoaded] = useState(true),
  [allProject, setAllProject] = useState(false);


  const updateMousePosition = throttle((e) => {
    const y = e.clientY - (window.innerHeight * 0.5),
      x = e.clientX - (window.innerWidth * 0.5);
      const develop = document.querySelector('.develop')
      if (develop) {
      const projectElements = develop.querySelectorAll('.project');
    
    projectElements.forEach((item) => {
      item.style.transform = `rotateY(${x * 0.01}deg) rotateX(${y * 0.01}deg)`;
    })};
  }, 20);

  useEffect(() => {
      // async
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
      <Suspense fallback={<div>Loading...</div>}>
          <MainComponent nameProject={nameProject} allProject={allProject} onLoadProject={onLoadProject} />
        </Suspense>
      </div>
    </div>
  );
};

export default OurProject;
