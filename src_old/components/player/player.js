import React, { useState } from 'react';

import Image from '../image-2';

import css from './player.module.css';

export default function Player({ href, embed, title, img }) {
    const [ player, setPlayer ] = useState();
    return <a href={ href} onClick={(e) => {
            e.preventDefault();

            setPlayer(true);
        }}>
        {
            player ?

                <iframe width='100%' height='300' scrolling='no' frameBorder='no' allow='autoplay' src={ embed } title={ title }></iframe> :

                <Image src={ img } alt={ title } className={ css.play }/>
        }
    </a>;
};
