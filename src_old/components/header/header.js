import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import css from './header.module.css';

import menuIcon from '../../icons/menu.svg';

function Links({ onRoute = () => {} }) {
  const links = [{
    href  : '/',
    label : 'music'
  }, {
    href  : '/samples',
    label : 'samples'
  }, {
    href  : '/songs/Companion',
    label : 'songs'
  }, {
    href  : '/info',
    label : 'info'
  }]

  return <>
    {links.map(({ href, label }) =>
      <Link className={css.navLink} to={href} activeClassName={css.active} key={href} onClick={onRoute}>{label}</Link>
    )}
  </>;
}

function Header({ siteTitle }) {
  const [ showNav, setShowNav ] = useState();

  return <div className={css.mobNavBg}>
    <header className={ css.header }>
        <h1 className={ css.logo }>
          <Link to='/'>
            {siteTitle}
          </Link>
        </h1>
        <nav>
          <button
            onClick={() => { setShowNav(!showNav); }}
          >
            <img src={menuIcon} alt='open menu' />
          </button>
          <div>
            <Links />
          </div>
        </nav>
    </header>
    <div className={showNav ? css.showNav : css.hideNav }>
      <Links onRoute={() => setShowNav(false) }/>
    </div>
  </div>;
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
