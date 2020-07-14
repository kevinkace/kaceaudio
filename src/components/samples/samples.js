import React from 'react';

import Sample from '../sample/sample';
import Audio from '../audio';

import downloadIcon from '../../icons/download.svg';

import allSamplesCsv from '../../hooks/use-samples';

import css from './samples.module.css';

export default function Samples({ filter, showDesc, view = 'grid' }) {
    const samples = allSamplesCsv()
        .filter(({ tags }) => {
            tags = tags.split(',');

            return filter ? tags.includes(filter) : true
        });

    return view === 'grid' ?
        <ul className={css.samples}>
            {samples
                .map(({ title, preview, href, desc, tags }) =>
                <li key={title} className={showDesc ? css.rowDesc : css.row}>
                    <Sample
                        title={title}
                        preview={preview}
                        href={href}
                        desc={desc}
                        showDesc={showDesc}
                    />
                </li>
            )}
        </ul> :
        <table className={css.table}>
            <colgroup>
                <col className={css.titleCol}></col>
                <col className={css.waveCol}></col>
                <col className={css.mp3Col}></col>
                <col className={css.descCol}></col>
                <col className={css.tagsCol}></col>
            </colgroup>
            <thead>
                <tr>
                    <th>title</th>
                    <th>wave</th>
                    <th className={css.mp3}>mp3 preview</th>
                    <th>description</th>
                    <th>tags</th>
                </tr>
            </thead>
            <tbody>
            {samples
                .map(({ title, preview, href, desc, tags }) =>
                <tr key={title}>
                    <td className={css.title}>{title}</td>
                    <td className={css.wave}>
                        <a href={href} className={css.download}><img src={downloadIcon} alt='download' /></a>
                    </td>
                    <td className={css.mp3}>
                        <Audio src={preview} autoplay={false} scale={0.9} />
                    </td>
                    <td><p>{desc}</p></td>
                    <td className={css.tags}><p>{tags.split(',').join(', ')}</p></td>
                </tr>
            )}
            </tbody>
        </table>;
}
