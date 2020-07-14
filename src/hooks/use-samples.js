import { useStaticQuery, graphql } from 'gatsby';

export default function Samples() {
    const { allSamplesCsv } = useStaticQuery(graphql`
        query SamplesQuery {
            allSamplesCsv {
                edges {
                    node {
                        title
                        preview
                        href
                        desc
                        tags
                    }
                }
            }
        }
    `);

    return allSamplesCsv.edges.map(({ node }) => {
        // todo: why doesn't this work??
        // node.tags = node.tags && node.tags.split ? node.tags.split(',') : [];

        return node
    });
};
