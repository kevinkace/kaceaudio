import React from 'react';

import css from './player.module.css';

export default function Player({ playing }) {
    return <div className={css.player}>
        {
            playing ?
            <audio controls autoPlay src={playing}></audio> :
            null
        }
    </div>
}