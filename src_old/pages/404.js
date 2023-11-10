import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

export default function NotFoundPage() {
  return <Layout>
    <SEO title='404: Not found' />
    <h1>404</h1>
    <p>resource not found</p>
  </Layout>;
};
