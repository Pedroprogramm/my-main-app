import React from 'react';
import './callUs.scss';
 
const CallUs = () => {
  return (
  <>
    <div className="marquee">
    {/* // <div className='background'> */}
        <p className='frst-text-inline'>Project X  |
        Website Developers  |
        UI/UX  |
        Creative Design  |
        Targeted advertising  |
        Project X  |
        Website Developers  |
        UI/UX  |
        Creative Design  | Project X  |
         </p>
        <p className='sec-text-inline'>Project X  |
        Website Developers  |
        UI/UX  |
        Creative Design  |
        Targeted advertising  |
        Project X  |
        Website Developers  |
        UI/UX  |
        Creative Design  | </p>
      </div>
      </>
  );
};
 
export default CallUs;

// import {useEffect, useState} from 'react';

// const CallUs = () => {
//   const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   const handleScroll = event => {
  //     setScrollTop(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

//   return (
//     <div>
//       <div
//         style={{
//           // position: 'fixed',
//           padding: '10px 0',
//           top: '0',
//           backgroundColor: 'white',
//           borderBottom: '3px solid black',
//           width: '100%',
//         }}
//       >
//         <h2>Scroll Top: {scrollTop}</h2>
//       </div>

//       <div style={{marginTop: '10rem'}}>
//         {[...Array(100)].map((_, index) => (
//           <p key={index}>Content {index}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CallUs;
