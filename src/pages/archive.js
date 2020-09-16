
import React from 'react';

import Layout from '../components/layout/layout';
import SEO    from '../components/seo';

import css from './archive.module.css';

import { songArchive, setArchive } from '../data/archive';

export default function ArchivePage() {

    return (
        <Layout>
            <SEO title='Archive' description="You don't know where you're going if you don't know where you've been" />

            <h2>Songs</h2>

            {songArchive.map(({ year, songs }) =>
                <div className={css.section}>
                    <h3>{year}</h3>
                    <ul>
                        {songs.map(({ href, title, artist, bitrate }) =>
                            <li><strong>{title}</strong> - {artist} | <a href={href}>mp3 ({bitrate})</a></li>
                        )}
                    </ul>
                </div>
            )}

            <h2>Sets</h2>

            {setArchive.map(({ year, sets }) =>
                <div className={css.section}>
                    <h3>{year}</h3>
                    <ul>
                        {sets.map(({ href, title, artist, bitrate }) =>
                            <li><strong>{title}</strong> - {artist} | <a href={href}>mp3 ({bitrate})</a></li>
                        )}
                    </ul>
                </div>
            )}

        </Layout>
    );
};
