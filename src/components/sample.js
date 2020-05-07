import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import css from './sample.module.css';
import { PlayingContext } from './provider.js';

function Sample({ title, href, preview }) {
    const { playing, changePlaying } = useContext(PlayingContext);

    return (
        <>
            <h3>{title}</h3>

            <div className={css.actions}>
                <a href={href} className={css.download}>download</a>

                <button
                    className={css.play}
                    onClick={() => {
                        changePlaying(playing === preview ? null : preview);
                    }}
                >
                    listen
                </button>
            </div>
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
