import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';

import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import About from './pages/About';

import globalstyles from './styles/Globals.module.css'

class App extends Component {
    render () {
      const App = () => (
        <div class={globalstyles.holder}>
          <Navbar/>
          <Router>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
          </Router>
          
        </div>
      );
      return (
        <App/>
      )
    }
}

export default App;
