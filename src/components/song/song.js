import PropTypes from 'prop-types';
import React from 'react';

import css from './song.module.css';

import Player from '../player/player';

import soundcloudIcon from '../../icons/soundcloud.svg';
import dropboxIcon from '../../icons/dropbox.svg';
import driveIcon from '../../icons/drive.svg';

function Song({ title, img, href, embed, soundcloud, dropbox, drive }) {
    embed = embed.replace('auto_play=false', 'auto_play=true');

    return (
        <div>
            <Player href={href} title={title} img={img} embed={embed}></Player>

            <p className={css.p}>
                download:
                <a href={soundcloud} className={css.soundcloud}><img src={soundcloudIcon} alt='soundcloud' /></a>
                <a href={dropbox} className={css.dropbox}><img src={dropboxIcon} alt='dropbox' /></a>
                <a href={drive} className={css.drive}><img src={driveIcon} alt='drive' /></a>
            </p>

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
