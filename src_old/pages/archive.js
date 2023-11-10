
import React, { useState } from 'react';

import Layout from '../components/layout/layout';
import SEO    from '../components/seo';

import css from './archive.module.css';

import { songArchive, setArchive } from '../data/archive';

export default function ArchivePage() {
    const [ showTracklist, setShowTracklist ] = useState();

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

            <hr className={css.hr}/>

            <h2>Sets</h2>

            {setArchive.map(({ year, sets }) =>
                <div className={css.section}>
                    <h3>{year}</h3>
                    <ul>
                        {sets.map(({ href, title, artist, bitrate, tracklist }) =>
                            <li>
                                <strong>{title}</strong> - {artist} | <a href={href}>mp3 ({bitrate})</a>
                                {" "} | <button onClick={() => {
                                    setShowTracklist(showTracklist === title ? null : title);
                                }}>tracklist</button>
                                {showTracklist === title ?
                                    <ol className={css.tracklist}>
                                        {tracklist.map(track => <li>{track}</li>)}
                                    </ol> :
                                    null
                                }
                            </li>
                        )}
                    </ul>
                </div>
            )}

        </Layout>
    );
};
