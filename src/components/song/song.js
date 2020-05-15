import PropTypes from 'prop-types';
import React, { useState } from 'react';

import css from './song.module.css';

import Image from '../image-2';

import soundcloudIcon from '../../icons/soundcloud.svg';
import dropboxIcon from '../../icons/dropbox.svg';
import driveIcon from '../../icons/drive.svg';

function Song({ title, img, href, embed, soundcloud, dropbox, drive }) {
    const [ player, setPlayer ] = useState(false);

    embed = embed.replace('auto_play=false', 'auto_play=true');

    return (
        <div>
            <a href={ href} onClick={(e) => {
                e.preventDefault();

                setPlayer(true);
            }}>
                {
                    player ?

                        <iframe width='100%' height='300' scrolling='no' frameBorder='no' allow='autoplay' src={ embed } title={ title }></iframe> :

                        <Image src={ img } alt={ title } className={ css.play }/>
                }
            </a>

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
