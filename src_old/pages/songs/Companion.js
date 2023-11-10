import React from 'react';

import Layout from '../../components/layout/layout';
import SEO    from '../../components/seo';
import Player from '../../components/player/player';
import Samples from '../../components/samples/samples';

import css from './songs.module.css';

import songs from '../../data/songs';

import imgData from '../../images/companion.jpg';

export default function IndexPage() {
    const { title, img, href, embed, wav, mp3, soundcloud } = songs.data.Companion;

    return <Layout>
        <SEO title='Companion' description='Newest track by Kace, free download and streaming. A neuro funk throwback.' image={imgData}/>

        <h1>Companion</h1>

        <div className={css.flex}>
            <div>
                <div className={css.player}>
                    <Player href={href} title={title} img={img} embed={embed}></Player>
                </div>

                <h2>download</h2>

                <ul>
                    <li><a href={soundcloud} className={css.soundcloud}><span>Soundcloud</span></a></li>
                    <li><a href={wav.dropbox} className={css.dropbox}><span>Dropbox</span></a></li>
                    <li><a href={wav.drive} className={css.drive}><span>Drive</span></a></li>
                    <li className={css.mp3s}>
                        mp3:
                        <a href={mp3.dropbox} className={css.dropboxIcon}><span>Dropbox</span></a>
                        <a href={mp3.drive} className={css.driveIcon}><span>Drive</span></a>
                    </li>
                </ul>
            </div>

            <div>
                <h2>info</h2>

                <dl>
                    <div>
                        <dt>title</dt>
                        <dd>Companion</dd>
                    </div>
                    <div>
                        <dt>BPM</dt>
                        <dd>168</dd>
                    </div>
                    <div>
                        <dt>scale</dt>
                        <dd>E phrygian</dd>
                    </div>
                    <div>
                        <dt>length</dt>
                        <dd>4:16</dd>
                    </div>
                </dl>

                <h2>samples</h2>
                <Samples filter={'Companion'} showDesc={false} />
            </div>
        </div>

    </Layout>;
};