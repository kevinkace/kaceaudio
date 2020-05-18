import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Song from '../components/song/song';

import css from './index.module.css';

import songs from '../data/songs';

function Songs() { // eslint-disable-line no-unused-vars
  return (
    <>
      {songs.titles.map(key => {
        const { title, img, href, embed } = songs.data[key];

        return <Song title={title} img={img} href={href} embed={embed} key={title}></Song>;
      })}
    </>
  );
}

export default function IndexPage() {
  return <Layout>
    <SEO title='music' />

    <p>Nothing here yet I'm afraid.</p>
    <p>In the meantime there are sample packs from some of my up-coming releases in the <Link to='/samples'>samples section</Link> - they're free, and open source.</p>
    <p>Follow me on <a href='https://soundcloud.com/kace-1'>SoundCloud</a> or <a href='https://twitter.com/kaceaudio'>Twitter</a>.</p>

    <div className={ css.discog }>
      {/* <Songs /> */}
    </div>

  </Layout>;
};
