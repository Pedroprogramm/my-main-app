import Header from "./header/header";
import Main from "./pages/Developer/main";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
import Footer from "./footer/footer";
import Design from "./pages/Design/design";
import Target from "./pages/Target/target";
import Smm from "./pages/Smm/Smm";
import Loader from "./loader/loader";

import { Component } from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './app.scss';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
         language: '',
         isLoaded: ''
  }
}

componentDidMount() {
  const isAnimationShown = localStorage.getItem('isAnimationShown');
    if (isAnimationShown) {
    this.setState({ isLoaded: true });
    console.log(isAnimationShown)
    
  } else {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.setState({ isLoaded: true });
        localStorage.setItem('isAnimationShown', 'true');
      }, 6000);
    });
  }
}

componentDidUpdate() {
  localStorage.setItem('scrollPosition', window.pageYOffset);
  console.log(window.pageYOffset)
}

 renderPage() {
  if (!this.state.isLoaded) {
    return (
      <div className='App'>
        <Loader/>
      </div>
    )
  } else 
  if (this.state.isLoaded){
    return (
      <div className="App">      
        <Router>
        <Loader isLoaded={this.state.isLoaded}/>
    <Header/>
    <Routes>
        <Route path='/' element={<Home changeLoad={() => this.changeLoad} />} />
        <Route path='/develop' element={<Main/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/design' element={<Design/>} />
        <Route path='/advirsing' element={<Target/>} />
        <Route path='/smm' element={<Smm/>} />
    </Routes>
    <Footer/>
    </Router>
      </div>
    )
  }
 }
  // changeLoad (props) {
  //   this.setState({isLoaded: props});
  // }

  render () {
    return (
      this.renderPage()
    );
  }}
  
  export default App;
  