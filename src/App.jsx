//react imports
import * as React from 'react';

//react-router imports
import { BrowserRouter } from 'react-router-dom';

//google analytics
import Analytics from 'react-router-ga';

//style imports
import './style/css/app.min.css';

//view imports
import Landing from './views/Landing.jsx';
import MainStory from './views/MainStory.jsx';
import Development from './views/Development.jsx';
import PublicSafety from './views/PublicSafety.jsx';
import Education from './views/Education.jsx';
import Transportation from './views/Transportation.jsx';
import Sustainability from './views/Sustainability.jsx';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Analytics id="" debug>
          <Landing />
          <MainStory />
          <Development />
          <PublicSafety />
          <Education />
          <Transportation />
          <Sustainability />
        </Analytics>
      </BrowserRouter>
    );
  }
}
