//react
import * as React from 'react';

//react-router
import { NavHashLink as NavLink } from 'react-router-hash-link';

//icons
import * as Feather from 'react-feather';

const NAVIGATION = [
  {
    comp: <Feather.Home />,
    link: '#housing-and-development',
  },
  {
    comp: <Feather.AlertTriangle />,
    link: '#publicsafety',
  },
  {
    comp: <Feather.Edit3 />,
    link: '#education',
  },
  {
    comp: <Feather.Truck />,
    link: '#transportation',
  },
  {
    comp: <Feather.Globe />,
    link: '#sustainability',
  },
];

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        {NAVIGATION.map((item, i) => {
          return (
            <NavLink key={i} smooth to={item.link} activeClassName="active">
              {item.comp}
            </NavLink>
          );
        })}
      </nav>
    );
  }
}
