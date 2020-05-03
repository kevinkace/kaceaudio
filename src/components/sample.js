import PropTypes from 'prop-types';
import React, { useState } from 'react';

import css from './sample.module.css';

const Sample = ({ title, href, play }) => {
    const [ player, setPlayer ] = useState(false);

    return (
        <>
            <h3>{title}</h3>

            <div class={css.actions}>
                <a href={href} className={css.download}>download</a>

                <button
                    className={css.play}
                    onClick={() => {
                        console.log(play);
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
