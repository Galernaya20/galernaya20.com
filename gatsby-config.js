const keys = require('./keys')

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: keys.contentful.spaceId,
        accessToken: keys.contentful.token,
      },
    },
  ],
}
