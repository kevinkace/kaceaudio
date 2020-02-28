import PropTypes from 'prop-types';
import React from 'react';

import Image from './image-2';

const Song = ({ title, img, href }) => (
    <a href={ href} onClick={(e) => {
        e.preventDefault();


    }}>
        <Image src={ img } alt={ title } />
    </a>
);

Song.propTypes = {
    title : PropTypes.string,
    src   : PropTypes.string,
    href  : PropTypes.string
};

Song.defaultProps = {
    title : '',
    src   : '',
    href  : ''
};

export default Song;