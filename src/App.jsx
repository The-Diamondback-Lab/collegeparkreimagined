//react imports
import React, { Component } from 'react';

//react-router imports
import { BrowserRouter } from 'react-router-dom';

//google analytics
import Analytics from 'react-router-ga';

//style imports
import './style/css/app.min.css';

//components import
import Header from './components/Header.jsx';

//view imports
import Landing from './views/Landing.jsx';
import MainStory from './views/MainStory.jsx';
import PublicSafety from './views/PublicSafety.jsx';
import Education from './views/Education.jsx';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Analytics id="" debug>
          <Header />
          <Landing />
          <MainStory />
          <PublicSafety />
          <Education />
        </Analytics>
      </BrowserRouter>
    );
  }
}
