import React from 'react';
import './footer.scss';
 
const Footer = () => {
  return (
    <div className='footer-backround'>
      <div className='contact-footer'>
        <div className='contact-pl'>
          <p>PL</p>
          <a className='number-footer' href="tel:+48731323835">+48 731323835
            <span className='a-border-line'></span>
          </a>
          <br/>
          <a className='number-footer' href="tel:+48731323542">+48 731323542
            <span className='a-border-line'></span>
          </a>
        </div>  
        <div className='contact-by'>
          <p>BY</p>
          <a className='number-footer' href="tel:+375291599592">+375 (29) 1599592
            <span className='a-border-line'></span>
          </a>
        </div>  
        <div className='see-our-social'>
          <div className='see-instagram-footer button-see-footer'>
            Наш замечательный Instagram
          </div>
          <div className='send-telegram-footer button-see-footer'>
            Напишите нам в Telegram
          </div>
          {/* <div className='send-mail-footer button-see-footer'>
            Напишите нам на Email
          </div> */}
          <div className='circle-footer-social'>
            <div className='circle-footer-facebook circle-footer'></div>
            <div className='circle-footer-viber circle-footer'></div>
            <div className='circle-footer-whatsapp circle-footer'></div>
            <div className='circle-footer-mail circle-footer'></div>
          </div>
        </div>
      </div> 
        <div className='our-social-footer'></div>
        <div className='copyright'>
        <small>&copy; Copyright 2023, ProjectX. All Rights Reserved</small>
        </div> 
    </div>
  );
};
 
export default Footer;