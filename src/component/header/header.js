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

    onBtnMenuEnter (e){
        if (e.target.classList.contains('nav-social') || e.target.classList.contains('social')){
            const btn = document.querySelector('.social-group');
            btn.classList.add('social-active');
        }
        else if (e.target.classList.contains('nav-languages') || e.target.classList.contains('language')){
            const btn = document.querySelector('.languages');
            btn.classList.add('language-active');
        }
    }
    
    onBtnMenuLeave (e){
        if (e.target.classList.contains('nav-social') || e.target.classList.contains('social-active')){
            const btn = document.querySelector('.social-group');
            btn.classList.remove('social-active');
        }
        else if (e.target.classList.contains('nav-languages') || e.target.classList.contains('language-active')){
            const btn = document.querySelector('.languages');
            btn.classList.remove('language-active');
        }
    }

    onRenderLanguage (e) {
        e.preventDefault();
        this.setState(({language}) => {
            e.preventDefault();
            if (e.target.name === language){
                return language; 
            } else {console.log(language); return {language: e.target.name}}
        })
    }

   render () { 
    return (
        <header className="App-header">
            <span className='logo'>img</span>
                <button className='btn header-btn number'> +48731323835</button>
                <button className='btn header-btn weCallYou'>Свяжитесь с нами</button>
                {/* <ul >
                    <li className='active-list-item'>Social</li>
                        <ul className='hovers'>
                        <li>Telegram</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>WhatsApp</li>
                        </ul>
                </ul> */}
                <div className='nav-social' onMouseEnter={this.onBtnMenuEnter} onMouseLeave={this.onBtnMenuLeave}>
                    <div className='btn-curcle social'>Social</div>
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
                    <div className='btn-curcle language'>{this.state.language}</div>
                    <ul className='languages'>
                        <li><a href='12' onClick={this.onRenderLanguage} name='Ru'>Ru</a></li>
                        <li><a href='12' onClick={this.onRenderLanguage} name='Eng'>Eng</a></li>
                        <li><a href='12' onClick={this.onRenderLanguage} name='Pol'>Pol</a></li>            
                    </ul>
                </div>
                <div className='menu btn-curcle'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
        </header>
    );
            }
  }
  
  export default Header;