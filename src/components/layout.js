/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import soundcloudIcon from '../icons/soundcloud.svg';

import { PlayingContext } from './provider.js';

import Header from './header';

import css from './layout.module.css';

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
        <PlayingContext.Consumer>
          { context =>
            <div className={ css.layout }>
                <div>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <main>{children}</main>
                </div>

                Playing : { context.playing }
                <footer className={ css.footer }>
                    <div>© {new Date().getFullYear()}</div>
                    <a href='https://soundcloud.com/kace-1'>
                        <img src={ soundcloudIcon } alt='soundcloud'/>
                    </a>
                </footer>
            </div>
          }
        </PlayingContext.Consumer>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
