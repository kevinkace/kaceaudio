module.exports = {
  siteMetadata: {
    title       : 'Kace',
    description : 'music',
    author      : '@kaceaudio',
  },
  plugins: [
    'gatsby-transformer-csv',
    'gatsby-plugin-react-helmet',
    {
      resolve : 'gatsby-source-filesystem',
      options : {
        name : 'images',
        path : `${__dirname}/src/images`,
      },
    },
    {
      resolve : 'gatsby-source-filesystem',
      options : {
        name : 'data',
        path : `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve : 'gatsby-plugin-manifest',
      options : {
        name             : 'gatsby-starter-default',
        short_name       : 'starter',
        start_url        : '/',
        background_color : '#111',
        theme_color      : '#0f1',
        display          : 'minimal-ui',
        icon             : 'src/images/icon.png',
      },

    },
    {
      resolve : 'gatsby-plugin-google-analytics',
      options : {
        trackingId: 'UA-166828766-1',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
