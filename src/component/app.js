import Header from "./header/header";
import Main from "./pages/Developer/main";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
import Footer from "./footer/footer";
import Design from "./pages/Design/design";
import Target from "./pages/Target/target";
import Smm from "./pages/Smm/Smm";

import { Component } from "react";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './app.scss';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
         language: ''
  }
}
Routers () {
  
}
  render () {
    return (
      <div className="App">      
        <Router>
    <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/develop' element={<Main/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/design' element={<Design/>} />
        <Route path='/advirsing' element={<Target/>} />
        <Route path='/smm' element={<Smm/>} />
    </Routes>
    <Footer/>
    </Router>
      </div>
    );
  }}
  
  export default App;
  