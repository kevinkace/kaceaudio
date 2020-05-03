import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sample from '../components/sample';

import sampleData from './sampleData';

import css from './samples.module.css';

const tags = [ 'drums', 'leads', 'bass', 'pads', 'fx' ];

export default function SamplesPage() {
    const [ filter, setFilter ] = useState();

    return (
        <Layout>
            <SEO title='samples' />
            <h1>samples</h1>

            <div className={css.filter}>
                filter:
                <ul>
                    {tags.map(tag =>
                        <li>
                            <button
                                className={filter === tag ? css.selected : null}
                                onClick={() => {
                                    setFilter(filter === tag ? undefined : tag);
                                }}
                            >{tag}</button>
                        </li>
                    )}
                </ul>
            </div>

            <ul className={css.samples}>
                {sampleData
                    .filter(({ tags }) => filter ? tags.includes(filter) : true)
                    .map(({ title, play, href }) => (
                    <li>
                        <Sample
                            title={title}
                            play={play}
                            href={href}
                        />
                    </li>
                ))}
            </ul>
        </Layout>
    );
};
