//react
import * as React from 'react';

//dbk svg import
import dbk from '../assets/img/dbk.svg';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper" id="footer-wrapper">
        <a
          href="http://www.dbknews.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={dbk} alt="" />
        </a>
        <div className="addthis_sharing_toolbox" id="add-this" />
      </div>
    </footer>
  );
}

export default Footer;