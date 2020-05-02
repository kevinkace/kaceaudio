import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import css from './header.module.css';

const Header = ({ siteTitle }) => (
  <header className={ css.header }>
      <h1 className={ css.logo }>
        <Link to='/'>
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <Link to='/'>music</Link>
        <Link to='/info'>info</Link>
        <Link to='/samples'>samples</Link>
        {/* <Link to='/archive'>archive</Link> */}
      </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
