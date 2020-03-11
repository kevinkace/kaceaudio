import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="info" />
    <h1>info</h1>

    <dl>
      <dt>name</dt>
      <dd>kevin cameron</dd>
      <dt>location</dt>
      <dd>seattle, wa</dd>
      <dt>origin</dt>
      <dd>toronto, can</dd>
      <dt>contact</dt>
      <dd><a href="https://twitter.com/kaceaudio">@kaceaudio</a></dd>
    </dl>
  </Layout>
)

export default SecondPage
