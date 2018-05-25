//react imports
import React, { Component } from 'react';

//react-router
import { HashLink as Link } from 'react-router-hash-link';

//component imports
import Ionicon from 'react-ionicons';

export default class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <h3>College Park</h3>
        <h1>
          <span>re</span>imagined
        </h1>
        <Link className="animated pulse infinite" id="animated-chevron" to='#mainstory'>
          <Ionicon icon='ios-arrow-down' color={'black'} />
        </Link>
      </div>
    );
  }
}