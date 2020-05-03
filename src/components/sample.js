import PropTypes from 'prop-types';
import React, { useState } from 'react';

import css from './sample.module.css';

function Audio({ src }) {
    return <audio controls className={css.player} autoPlay={true}>
        <source src={src} type='audio/mpeg' />
    </audio>
}

function Sample({ title, href, preview }) {
    const [ player, setPlayer ] = useState(false);

    return (
        <>
            <h3>{title}</h3>

            <div className={css.actions}>
                <a href={href} className={css.download}>download</a>

                <button
                    className={css.play}
                    onClick={() => {
                        setPlayer(!player);
                    }}
                >
                    listen
                </button>
            </div>

            {player ? <Audio src={preview} /> : null}
        </>
    )
};

Sample.propTypes = {
    title : PropTypes.string,
    href  : PropTypes.string,
    play  : PropTypes.string
};

Sample.defaultProps = {
    title : '',
    href  : '',
    play  : ''
};

export default Sample;
