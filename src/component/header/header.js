import { Component} from 'react';

import './header.scss';
import '../app.scss';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            language: 'Ru',
        }
    }

    onBtnMenuEnter = (e) => {
        if (e.target.classList.contains('nav-social') || e.target.classList.contains('social')){
            const btn = document.querySelector('.social-group');
            btn.classList.add('social-active');
        }
        else if (e.target.classList.contains('nav-languages') || e.target.classList.contains('language')){
            const btn = document.querySelector('.languages');
            btn.classList.add('language-active');
        }
    }
    
    onBtnMenuLeave = (e) =>{
        if (e.target.classList.contains('nav-social') || e.target.classList.contains('social-active') || e.target.classList.contains('language')){
            const btn = document.querySelector('.social-group');
            btn.classList.remove('social-active');
        }
        else if (e.target.classList.contains('nav-languages') || e.target.classList.contains('language-active')){
            const btn = document.querySelector('.languages');
            btn.classList.remove('language-active');
        }
    }

    onRenderLanguage = (e) => {
        console.log(e.target.name);
        this.setState(() => {
            e.preventDefault();
            return {language: e.target.name}
        })
    }

    onMenu (e) {
        if (e.target.classList.contains('menu') || e.target.classList.contains('menu-btn-unactive') || 
        e.target.classList.contains('menu-btn-active') || e.target.classList.contains('main-menu-background')){
            const menuBackground = document.querySelector('.main-menu-background'),
                  menu = document.querySelector('.main-menu'),
                  btnMenu = document.querySelector('.menu'),
                  menuUnactive = document.querySelector('#menu-unactive'),
                  menuActive = document.querySelector('#menu-active');
                //   html = document.querySelector('html');
                
                menu.classList.toggle('active-main-menu');
                menuBackground.classList.toggle('active-menu-background');

                menuActive.classList.toggle('menu-btn-unactive');
                menuUnactive.classList.toggle('menu-btn-unactive');
            
                menuActive.classList.toggle('menu-btn-active');
                menuUnactive.classList.toggle('menu-btn-active');

                btnMenu.classList.toggle('menu-curcle-x');
                btnMenu.classList.toggle('btn');
                // if (menuBackground.classList.contains('active-menu-background')){
                //     html.style.overflow = ('hidden');
                // } else {
                //     html.style.overflow = ('visible');
                // }
        } 
    }

   render () { 
    return (
        <header className="App-header">
            <a className='logo' href='12'>
                <img src='logo.svg' alt='logo-project-x'/>
            </a>
                <a href='12' className='btn header-btn weCallYou'>
                    <div className='static-text-header '>Связаться с нами</div>
                    <div className='hover-text-header'>Связаться с нами</div>
                    <div className='social-backgound'></div>
                </a>
                <div className='nav-social' onMouseEnter={this.onBtnMenuEnter} onMouseLeave={this.onBtnMenuLeave}>
                    <div className='btn header-btn social'>
                        <div className='static-text-header '>Social Media</div>
                        <div className='hover-text-header'>Social Media</div>
                        <div className='social-backgound'></div>
                    </div>
                    <div className='social-group'>  
                        <ul>
                            <li><a href='231'>Telegram</a></li>
                            <li><a href='13'>Instagram</a></li>
                            <li><a href='213'>Facebook</a></li>
                            <li><a href='123'>WhatsApp</a></li>
                        </ul>
                    </div>
                </div>
                <div className='nav-languages' onMouseEnter={this.onBtnMenuEnter} onMouseLeave={this.onBtnMenuLeave}>
                    <div className='btn btn-curcle language'>
                        <div className='static-text-header '>{this.state.language}</div>
                        <div className='hover-text-header'>{this.state.language}</div>
                        <div className='social-backgound'></div>
                    </div>
                    <ul className='languages'>
                        <li><a href='12' onClick={this.onRenderLanguage} name='Ru'>Ru</a></li>
                        <li><a href='12' onClick={this.onRenderLanguage} name='Eng'>Eng</a></li>
                        <li><a href='12' onClick={this.onRenderLanguage} name='Pol'>Pol</a></li>            
                    </ul>
                </div>
                <div className='menu btn-curcle btn' onClick={this.onMenu}>
                    <svg id='menu-active' className='menu-btn-active' xmlns="http://www.w3.org/2000/svg" width="26" height="23" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <svg id='menu-unactive' className='menu-btn-unactive' xmlns="http://www.w3.org/2000/svg" width="26" height="23" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
                <div className='main-menu-background' onClick={this.onMenu}>
                <div className='main-menu'>
                    <div className=''></div>       
                    <div className='menu-socials'>
                        <span className='header-text-menu'>
                            Социальные сети
                        </span>
                        <span className='socials-text-menu'>
                            <img className='icons-social' src="telegram.png" alt="telegram-icon" />
                            <a href='12' >
                                <div className='static-social-menu'> Telegram</div>
                                <div className='hover-social-menu telegram-color'>Telegram</div>
                            </a>
                        </span>
                        <span className='socials-text-menu'>
                            <img className='icons-social instagram' src="instagram.png" alt="instagram-icon" />
                            <a href='12'>
                                <div className='static-social-menu'> Instagram</div>
                                <div className='hover-social-menu instagram-color'>Instagram</div>
                            </a>
                        </span>
                        <span className='socials-text-menu'>
                            <img className='icons-social facebook' src="facebook.png" alt="facebook-icon" />    
                            <a href='12'>
                                <div className='static-social-menu'> Facebook</div>
                                <div className='hover-social-menu facebook-color'>Facebook</div>
                            </a>
                        </span>
                        <span className='socials-text-menu'>
                            <img className='icons-social whatsApp' src="whatsapp.png" alt="whatsApp-icon" />
                            <a href='12'>
                                <div className='static-social-menu'> WhatsApp</div>
                                <div className='hover-social-menu whatsapp-color'>WhatsApp</div>
                            </a>
                        </span>
                        <span className='socials-text-menu'>
                            <img className='icons-social viber' src="viber.png" alt="viber-icon" />
                            <a href='12'>
                                <div className='static-social-menu'> Viber</div>
                                <div className='hover-social-menu viber-color'>Viber</div>
                            </a>
                        </span>
                    </div>
                    <div className='menu-services'>
                            <a href='21' className='service-text-menu'>Главная
                                <span className='a-border-line'></span>
                            </a>
                            <a href='21' className='service-text-menu'>Услуги
                                <span className='a-border-line'></span>
                            </a>
                            <a href='21' className='service-text-menu'>Портфолио
                                <span className='a-border-line'></span>
                            </a>
                            <a href='21' className='service-text-menu'>Озывы
                            <span className='a-border-line'></span>
                            </a>
                            <a href='21' className='service-text-menu'>Контакты
                            <span className='a-border-line'></span>
                            </a>
                    </div>       
                </div>
                </div>
                
        </header>
    );
            }
  }
  
  export default Header;