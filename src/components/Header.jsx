//react imports
import React, { Component } from 'react';

//component imports
import { Menu } from './Icons.jsx';

export default class Header extends Component {
  state = { menuVisible: false };

  render() {
    const { menuVisible } = this.state;
    let className = menuVisible ? 'nav-visible' : 'nav-hidden';

    return (
      <header>
        <div className="wrapper" id="header-wrapper">
          <button id="menu-btn">
            <Menu color={'black'} />
          </button>
          <nav className={className}>{/* stuff */}</nav>
        </div>
      </header>
    );
  }
}
