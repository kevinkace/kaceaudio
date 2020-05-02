import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sample from '../components/sample';

const SecondPage = () => (
  <Layout>
    <SEO title='samples' />
    <h1>samples</h1>

    <ul>
        <li>
          <Sample
            title='Companion drums'
            play='play file'
            href='/download'
          />
        </li>
    </ul>
  </Layout>
)

export default SecondPage
