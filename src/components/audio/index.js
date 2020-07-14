import React from 'react';

import css from './index.module.css';

export default function Audio({ src, autoplay = true, scale = 1 }) {

    const style = {
        zoom  : scale,
        width : `${100 / scale}%`
    }
    return <audio controls className={css.player} autoPlay={autoplay} style={style}>
        <source src={src} type='audio/mpeg' />
    </audio>
};
