import React from 'react';

import css from './index.module.css';

const links = [{
    href  : 'https://soundcloud.com/kace-1',
    label : 'SoundCloud'
}, {
    href  : 'https://kace.bandcamp.com',
    label : 'Bandcamp'
}, {
    href  : 'https://twitter.com/kaceaudio',
    label : 'Twitter'
}];

export default function Links() {
    return <ul className={css.links}>
        {links.map(({ href, label }) =>
            <li>
                <a href={href}>{label}</a>
            </li>
        )}
    </ul>;
};
