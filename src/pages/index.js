import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Song from '../components/song';

import css from './index.module.css';

const songs = [{
  title : 'Companion',
  img : 'companion.jpg',
  href : 'https://soundcloud.com/kace-1/companion/s-oDIAyumVxtG',
  embed : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/815157661%3Fsecret_token%3Ds-oDIAyumVxtG&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  soundcloud : 'https://soundcloud.com/kace-1/companion/s-oDIAyumVxtG',
  dropbox : 'https://www.dropbox.com/s/rs0h97v86v9fpdw/Companion%20-%20Kace.mp3?dl=0',
  drive : 'https://drive.google.com/file/d/1CGq1RsyPGVMLUKCEPxYVVM5SStvDpWSF/view?usp=sharing'
}, {
  title : 'Split',
  img : 'split.jpg',
  href : 'https://soundcloud.com/kace-1/split/s-0RjF0FKIvRM',
  embed : 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/815156998%3Fsecret_token%3Ds-0RjF0FKIvRM&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  soundcloud : 'https://soundcloud.com/kace-1/split/s-0RjF0FKIvRM',
  dropbox : 'https://www.dropbox.com/s/4un2apvziclcioi/Split%20-%20Kace.mp3?dl=0',
  drive : 'https://drive.google.com/file/d/175XlWwI99ZQ-4SQ4ua__SaSEnfOifRNa/view?usp=sharing'
}];

function Songs() { // eslint-disable-line no-unused-vars
  return (
    <>
      {songs.map(({ title, img, href, embed }) =>
        <Song title={title} img={img} href={href} embed={embed} key={title}></Song>
      )}
    </>
  );
}

const IndexPage = () => (
  <Layout>
    <SEO title='music' />

    <p>Nothing here yet I'm afraid.</p>
    <p>In the meantime there are sample packs from some of my up-coming releases in the <Link to='/samples'>samples section</Link> - they're free, and open source.</p>
    <p></p>

    <div className={ css.discog }>
      {/* <Songs /> */}
    </div>

  </Layout>
)

export default IndexPage;
