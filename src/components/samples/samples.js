import React from 'react';

import Sample from '../sample/sample';

import samples from '../../data/samples';

import css from './samples.module.css';

export default function Samples({ filter, showDesc }) {
    return <ul className={showDesc === false ? css.samplesNoDesc : css.samples}>
        {samples
            .filter(({ tags }) => filter ? tags.includes(filter) : true)
            .map(({ title, preview, href, desc }) => (
            <li key={title}>
                <Sample
                    title={title}
                    preview={preview}
                    href={href}
                    desc={desc}
                    showDesc={showDesc}
                />
            </li>
        ))}
    </ul>;
}