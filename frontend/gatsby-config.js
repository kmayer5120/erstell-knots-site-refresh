module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.erstellknots.com/',
    title: 'Erstell Knots',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '283739452',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
  ],
};
