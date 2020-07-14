import React, { useState } from 'react';

import Layout  from '../components/layout/layout';
import SEO     from '../components/seo';
import Samples from '../components/samples/samples';

import css from './samples.module.css';

const tags = [ 'drums', 'leads', 'bass', 'pads', 'fx', 'all' ];

export default function SamplesPage() {
    const [ filter, setFilter ] = useState();

    return (
        <Layout>
            <SEO title='Kace samples' description='Free wave samples of drums, bass, and everything else' />

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

            <Samples filter={filter} />
        </Layout>
    );
};
