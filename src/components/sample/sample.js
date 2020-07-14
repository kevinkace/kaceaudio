import PropTypes from 'prop-types';
import React, { useState } from 'react';

import css from './sample.module.css';

import Audio from '../audio';


function Sample({ title, href, preview, desc, showDesc }) {
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

            { showDesc !== false ? <p className={css.desc}>{desc}</p> : null }

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
