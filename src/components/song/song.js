import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import css from './song.module.css';

import Player from '../player/player';

import soundcloudIcon from '../../icons/soundcloud.svg';
import dropboxIcon from '../../icons/dropbox.svg';
import driveIcon from '../../icons/drive.svg';

function Song({ song }) {
    const { title, img, href, embed, soundcloud, wav } = song;
    let _embed = embed.replace('auto_play=false', 'auto_play=true');

    return (
        <div>
            <Player href={href} title={title} img={img} embed={_embed}></Player>

            <div className={ css.details }>
                <p className={css.p}>
                    download:
                    <a href={soundcloud} className={css.soundcloud}><img src={soundcloudIcon} alt='soundcloud' /></a>
                    <a href={wav.dropbox} className={css.dropbox}><img src={dropboxIcon} alt='dropbox' /></a>
                    <a href={wav.drive} className={css.drive}><img src={driveIcon} alt='drive' /></a>
                </p>

                <p className={css.p}>
                    <Link to='/songs/Companion'>full info <span className={ css.dir }><span>→</span></span></Link>
                </p>
            </div>

        </div>
    );
};

Song.propTypes = {
    title : PropTypes.string,
    src   : PropTypes.string,
    href  : PropTypes.string,
    embed : PropTypes.string
};

Song.defaultProps = {
    title : '',
    src   : '',
    href  : '',
    embed : ''
};

export default Song;
