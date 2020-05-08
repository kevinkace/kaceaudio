import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Song from '../components/song';

import css from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title='music' />

    <div className={ css.discog }>
      <Song
        title='Companion'
        img='companion.jpg'
        href='https://soundcloud.com/kace-1/companion/s-oDIAyumVxtG'
        embed='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/815157661%3Fsecret_token%3Ds-oDIAyumVxtG&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
      />
      <Song
        title='Split'
        img='split.jpg'
        href='https://soundcloud.com/kace-1/split/s-0RjF0FKIvRM'
        embed='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/815156998%3Fsecret_token%3Ds-0RjF0FKIvRM&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
      />
    </div>

    {/* <h2>archive</h2>

    <div className={ css.discog }>
      <Song
      title='Sub Scrypt'
      img='sub-scrypt.jpg'
      href='https://soundcloud.com/kace-1/sub-scrypt/s-GLxAF'
      embed='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/774122014%3Fsecret_token%3Ds-GLxAF&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
      />
    </div> */}

  </Layout>
)

export default IndexPage;
