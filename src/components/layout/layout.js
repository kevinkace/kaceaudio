import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/header';

import css from './layout.module.css';

import soundcloudIcon from '../../icons/soundcloud.svg';
import twitterIcon from '../../icons/twitter.svg';
import bandcampIcon from '../../icons/bandcamp.svg';

const links = [{
  href : 'https://soundcloud.com/kace-1',
  icon : soundcloudIcon,
  alt  : 'SoundCloud'
}, {
  href : 'https://twitter.com/kaceaudio',
  icon : twitterIcon,
  alt  : 'Twitter'
}, {
  href : 'https://kace.bandcamp.com',
  icon : bandcampIcon,
  alt  : 'Bandcamp'
}];

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={ css.layout }>
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>
      <footer className={ css.footer }>

        <div>© {new Date().getFullYear()}</div>

        <div className={css.links}>
          {links.map(({ href, icon, alt }) => <a href={href} key={alt} title={alt}><img src={icon} alt={alt} /></a>)}
        </div>

      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
