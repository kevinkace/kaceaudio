import PropTypes from 'prop-types';
import React, { useState } from 'react';

import css from './song.module.css';

import Image from './image-2';

const Song = ({ title, img, href, embed }) => {
    const [ player, setPlayer ] = useState(false);

    embed = embed.replace('auto_play=false', 'auto_play=true');

    return (
    <a href={ href} onClick={(e) => {
        e.preventDefault();

        setPlayer(true);
    }}>
        {
            player ?

                <iframe width='100%' height='300' scrolling='no' frameborder='no' allow='autoplay' src={ embed } title={ title }></iframe> :

                <Image src={ img } alt={ title } className={ css.play }/>
        }
    </a>
)};

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
