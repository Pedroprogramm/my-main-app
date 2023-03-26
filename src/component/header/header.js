import './header.scss';

function Header() {
    return (
        <header className="App-header">
            <span className='logo'>img</span>
                <button className='btn header-btn number'/>
                <button className='btn header-btn weCallYou'/>
                <ul >
                {/* <li>Social media</li> */}
                    <li className='active-list-item'>Telegram</li>
                        <ul className='hovers'>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>WhatsApp</li>
                        </ul>
                </ul>
                <ul className='language'>
                    <li className='active-list-item'>Ru</li>
                    <ul>
                    <li className='hovers'>Eng</li>
                    <li>Pol</li>
                    </ul>
                </ul>
        </header>
    );
  }
  
  export default Header;