const slash = require('slash')
const path = require('path')

const OneBlockPage = path.resolve(process.cwd(), 'src/components/pages/OneBlockPage/OneBlockPage.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(`
    {
      allContentfulOneBlockPage(filter: {id: {eq: "c20jrNYNtpC0UwmoSg4w4SU"}}) {
        edges {
          node {
            id
            header {
              title
              description {
                description
              }
            }
            description {
              title
              description {
                description
              }
            }
            descriptionMedia {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  createPage({
    path: '/mounting',
    component: slash(OneBlockPage),
    context: result.data.allContentfulOneBlockPage.edges[0].node,
  })
}
