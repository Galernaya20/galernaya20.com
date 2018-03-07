const slash = require('slash')
const path = require('path')

const Studio = path.resolve(process.cwd(), 'src/components/pages/Studio/Studio.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const studioResults = await graphql(
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
        contentfulStudioPage {
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
            title
            image {
              file {
                url
              }
            }
          }
          studioA {
            ...InfoWithPrice
          }
          studioB {
            ...InfoWithPrice
          }
          vocalRecord {
            ...InfoWithPrice
          }
          toolsRecording {
            ...InfoWithPrice
          }
          production {
            ...InfoWithPrice
          }
          navigation {
            title
            link
          }
          soundCloud {
            title
            iframe {
              iframe
            }
          }
          liveRecord {
            title
            price
            description {
              description
            }
            videoLeft
            videoRight
          }
        }
      }
    `,
  )

  createPage({
    path: '/',
    component: slash(Studio),
    context: studioResults.data.contentfulStudioPage,
  })
}
