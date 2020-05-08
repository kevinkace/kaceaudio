import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

import css from './layout.module.css';

import soundcloudIcon from '../icons/soundcloud.svg';

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
        <a href='https://soundcloud.com/kace-1'>
          <img src={ soundcloudIcon } alt='soundcloud'/>
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
