import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Sample = ({ title, href, play }) => {
    const [ player, setPlayer ] = useState(false);

    return (
        <>
        <h3>Companion Drums</h3>

        <a href="/download">download</a>
        <button>listen</button>
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
