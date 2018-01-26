module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || require('./keys').contentful.spaceId,
        accessToken: process.env.CONTENTFUL_TOKEN || require('./keys').contentful.token,
      },
    },
  ],
}
