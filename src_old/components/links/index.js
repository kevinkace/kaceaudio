import React from 'react';

import css from './index.module.css';

import bandcampIcon from '../../icons/bandcamp.svg';
import twitterIcon from '../../icons/twitter.svg';
import soundcloudIcon from '../../icons/soundcloud.svg';

const links = [{
    href  : 'https://soundcloud.com/kace-1',
    label : 'SoundCloud',
    icon  : soundcloudIcon
}, {
    href  : 'https://kace.bandcamp.com',
    label : 'Bandcamp',
    icon  : bandcampIcon
}, {
    href  : 'https://twitter.com/kaceaudio',
    label : 'Twitter',
    icon  : twitterIcon
}, {
    href  : 'https://kaceaudio.com/songs/Companion',
    label : 'newest song: Companion'
}];

export default function Links() {
    return <ul className={css.links}>
        {links.map(({ href, label, icon }) =>
            <li key={label}>
                <a href={href}>{label} <img src={icon} alt='' /></a>
            </li>
        )}
    </ul>;
};
