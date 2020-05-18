import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Image from '../components/image-2';

import css from './info.module.css';

export default function SecondPage() {
    return <Layout>
        <SEO title='info' />

        <div className={css.info}>
            <div>
                <Image src={'avatar.png'} alt={''} />
            </div>
            <div>
                <dl>
                    <div>
                        <dt>name</dt>
                        <dd>Kevin A. Cameron</dd>
                    </div>

                    <div>
                        <dt>location</dt>
                        <dd>Seattle, Wa</dd>
                    </div>

                    <div>
                        <dt>origin</dt>
                        <dd>Toronto, Can</dd>
                    </div>

                    <div>
                        <dt>contact</dt>
                        <dd><a href='https://twitter.com/kaceaudio'>@kaceaudio</a></dd>
                    </div>
                </dl>

                <p>Composer, sound designer, and engineer. Started in audio as a drum &amp; bass dj and producer in Ontario Canada, outside Toronto. Received an Honours Diploma from The Harris Institute in producing/engineering. Had a short stint as the product specialist for Steinberg Canada, and recording engineer before moving to Seattle.</p>
            </div>
        </div>
    </Layout>;
};
