const slash = require('slash')
const path = require('path')

const StudioA = path.resolve(process.cwd(), 'src/components/pages/StudioA/StudioA.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const studioAResult = await graphql(`
    {
      allContentfulStudioDescriptionPage(filter: {id: {eq: "c28EHNdy71uIq4Co2imISU6"}}) {
        edges {
          node {
            title
            header {
              title
              description {
                description
              }
              media {
                type
                src {
                  src
                }
              }
            }
            info {
              title
              description {
                description
              }
            }
            infoMedia {
              file {
                url
              }
            }
            navigation {
              title
              link
            }
            production {
              title
              description {
                description
              }
              price
              link
            }
            reviews {
              name
              description {
                description
              }
              image {
                file {
                  url
                }
              }
            }
            logos {
              image {
                file {
                  url
                }
              }
            }
            rentPrice {
              title
              description {
                description
              }
            }
          }
        }
      }
    }
  `)
  createPage({
    path: '/studio-a',
    component: slash(StudioA),
    context: studioAResult.data.allContentfulStudioDescriptionPage.edges[0].node,
  })
}
