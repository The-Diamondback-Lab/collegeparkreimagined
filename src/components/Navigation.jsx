//react
import * as React from 'react';

//react-router
import { NavHashLink as NavLink } from 'react-router-hash-link';

//icons
import * as Feather from 'react-feather';
import Ionicon from 'react-ionicons';

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
    comp: <Ionicon icon="md-school" fontSize='1.75em' color="white" />,
    link: '#education',
  },
  {
    comp: <Ionicon icon="md-car" fontSize='1.75em' color="white" />,
    link: '#transportation',
  },
  {
    comp: <Ionicon icon="md-globe" fontSize='1.75em' color="white" />,
    link: '#sustainability',
  },
];

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        {NAVIGATION.map((item, i) => {
          return (
            <NavLink key={i} to={item.link} activeClassName="active">
              {item.comp}
            </NavLink>
          );
        })}
      </nav>
    );
  }
}
