import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import css from './info.module.css';

export default function SecondPage() {
    return <Layout>
        <SEO title='info' />

        <div className={css.info}>
            <dl>
                <div>
                    <dt>name</dt>
                    <dd>kevin cameron</dd>
                </div>

                <div>
                    <dt>location</dt>
                    <dd>seattle, wa</dd>
                </div>

                <div>
                    <dt>origin</dt>
                    <dd>toronto, can</dd>
                </div>

                <div>
                    <dt>contact</dt>
                    <dd><a href='https://twitter.com/kaceaudio'>@kaceaudio</a></dd>
                </div>
            </dl>

            <p>Sound designer, engineer, and composer. Started in audio as a drum &amp; bass dj and producer in Ontario Canada, outside Toronto. Received an Honours Diploma from The Harris Institute in producing/engineering. Had a short stint as the product specialist for Steinberg Canada, and recording engineer before moving to Seattle.</p>
        </div>
    </Layout>;
};
