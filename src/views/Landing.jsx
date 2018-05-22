//react imports
import React, { Component } from 'react';

//component imports
import { ChevronDown } from '../components/Icons.jsx';

export default class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <h3>College Park</h3>
        <h1>
          <span>re</span>imagined
        </h1>
        <button className="animated pulse infinite" id="animated-chevron">
          <ChevronDown color={'black'} />
        </button>
      </div>
    );
  }
}
