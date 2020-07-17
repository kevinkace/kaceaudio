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
            {songs.titles.filter(title => songs.data[title].live).map(title => {

                return <Song song={songs.data[title]} key={title}></Song>;
            })}
        </>
    );
}

export default function IndexPage() {
    return <Layout>
        <SEO title='Kace Audio' description='DnB producer. Download songs, and samples.' />

        <p><Link to='/songs/Companion'>Companion</Link> is now available to stream and download.</p>

        <p>There are sample packs from some of my releases (and more) in the <Link to='/samples'>samples section</Link> - they're free, and open source.</p>
        <p>Follow me on <a href='https://soundcloud.com/kace-1'>SoundCloud</a>, <a href='https://kace.bandcamp.com'>Bandcamp</a>, or <a href='https://twitter.com/kaceaudio'>Twitter</a>.</p>

        <h2 className={ css.songs }>songs</h2>

        <div className={ css.discog }>
            <Songs />
        </div>

    </Layout>;
};
