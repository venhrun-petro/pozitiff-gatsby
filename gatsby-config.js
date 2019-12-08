// let contentfulConfig
// try {
//   // Load the Contentful config from the .contentful.json
//   contentfulConfig = require('./.contentful')
// } catch (_) {}

// // Overwrite the Contentful config with environment variables if they exist
// contentfulConfig = {
//   spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || contentfulConfig.accessToken,
// }

// const { spaceId, accessToken } = contentfulConfig

// if (!spaceId || !accessToken) {
//   throw new Error(
//     'Contentful spaceId and the delivery token need to be provided.'
//   )
// }

module.exports = {
  siteMetadata: {
    lat: 50.106949,
    lng: 14.362638,
    title: 'PozitiFF Company s.r.o.',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pozitiff-company-site',
        short_name: 'pozitiff-site',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/pozitiff_icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `totkjpk1soa9`,
        accessToken: 'fd841cd6cbe94c8ebc054055a5eac07d2b35fe9cfc933eddb4b0269c65604d6c',
        // Learn about environment variables: https://gatsby.app/env-vars
        //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        //host: `preview.contentful.com`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
