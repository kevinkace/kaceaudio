import React from 'react';

import Sample from '../sample/sample';

import allSamplesCsv from '../../hooks/use-samples';

import css from './samples.module.css';

export default function Samples({ filter, showDesc }) {

    const samples = allSamplesCsv();

    return <ul className={showDesc === false ? css.samplesNoDesc : css.samples}>
        {samples
            .filter(({ tags }) => {
                tags = tags.split(',');

                return filter ? tags.includes(filter) : true
            })
            .map(({ title, preview, href, desc, tags }) => (
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
