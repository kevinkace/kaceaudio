
import React, { useState } from 'react';

import Layout  from '../components/layout/layout';
import SEO     from '../components/seo';
import Samples from '../components/samples/samples';

import gridIcon from '../icons/grid.svg';
import rowsIcon from '../icons/rows.svg';

import css from './samples.module.css';

const tags = [ 'drums', 'leads', 'bass', 'pads', 'fx', 'all' ];

export default function SamplesPage() {
    const [ filter, setFilter ] = useState();
    const [ view, setView ] = useState('grid');

    return (
        <Layout>
            <SEO title='Samples' description='Free wave samples of drums, bass, and everything else' />


            <header className={css.header}>
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

                <div className={css.view}>
                    <button onClick={() => setView('grid')} className={view === 'grid' ? css.buttonSelected : null}>
                        <img src={gridIcon} alt='grid view'/>
                    </button>
                    <button onClick={() => setView('table')} className={view === 'table' ? css.buttonSelected : null}>
                        <img src={rowsIcon} alt='table view'/>
                    </button>
                </div>
            </header>

            <Samples filter={filter} view={view}/>
        </Layout>
    );
};
