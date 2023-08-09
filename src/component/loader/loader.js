import React, { useEffect } from 'react';
import './loader.scss';
 
const Loader = (props) => {
  
    useEffect (() => {
        if (props.isLoaded) {
            const back = document.querySelector('.loader-back');
        back.classList.add('loaded');
        }
    })
  return (
    <div className='loader-back'>
    
    </div>
  
  );
};
 
export default Loader;