const slash = require('slash')
const path = require('path')

const Production = path.resolve(process.cwd(), 'src/components/pages/Production/Production.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const productionResults = await graphql(
    `
      fragment InfoWithPrice on ContentfulInfoWithPrice {
        title
        description {
          description
        }
        price
        link
      }

      {
        contentfulProductionPage {
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
          logos {
            title
            image {
              file {
                url
              }
            }
          }
          arrangement {
            ...InfoWithPrice
          }
          consolidation {
            ...InfoWithPrice
          }
          soundCloud {
            iframe {
              iframe
            }
          }
          studioRental {
            title
            description {
              description
            }
            videoLeft
            videoRight
            price
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
        }
      }
    `,
  )

  createPage({
    path: '/production',
    component: slash(Production),
    context: productionResults.data.contentfulProductionPage,
  })
}
