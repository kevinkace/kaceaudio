import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import Image2 from '../components/image-2';
import SEO from '../components/seo';
import Song from '../components/song';

import css from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title=' ' />

    <div className={ css.discog }>
      <Song
        title='Companion'
        img='companion.jpg'
        href='https://soundcloud.com/kace-1/companion/s-9N4fT'
        embed='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/767641501%3Fsecret_token%3Ds-9N4fT&color=%23080809&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
      />
    </div>

    <h2>archive</h2>

    <div className={ css.discog }>
      <Link to='/sub-scrypt/'>
        <Image/>
      </Link>
    </div>

  </Layout>
)

export default IndexPage
