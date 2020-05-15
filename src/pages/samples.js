import React, { useState } from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Sample from '../components/sample/sample';

import samples from '../data/samples';

import css from './samples.module.css';

const tags = [ 'drums', 'leads', 'bass', 'pads', 'fx', 'all' ];

export default function SamplesPage() {
    const [ filter, setFilter ] = useState();

    return (
        <Layout>
            <SEO title='samples' />

            <div className={css.filter}>
                filter:
                <ul>
                    {tags.map(tag =>
                        <li key={tag}>
                            <button
                                className={filter === tag ? css.selected : null}
                                onClick={() => {
                                    setFilter((filter === tag || tag === 'all') ? undefined : tag);
                                }}
                            >{tag}</button>
                        </li>
                    )}
                </ul>
            </div>

            <ul className={css.samples}>
                {samples
                    .filter(({ tags }) => filter ? tags.includes(filter) : true)
                    .map(({ title, preview, href, desc }) => (
                    <li key={title}>
                        <Sample
                            title={title}
                            preview={preview}
                            href={href}
                            desc={desc}
                        />
                    </li>
                ))}
            </ul>
        </Layout>
    );
};
