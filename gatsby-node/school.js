const slash = require('slash')
const path = require('path')

const School = path.resolve(process.cwd(), 'src/components/pages/School/School.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const schoolResults = await graphql(
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
        contentfulSchoolPage {
          title
          header {
            title
            description {
              description
            }
          }
          selfProduction {
            ...InfoWithPrice
          }
          recordingAndMixing {
            ...InfoWithPrice
          }
          dj {
            ...InfoWithPrice
          }
          selfProductionMedia {
            file {
              url
            }
          }
          recordingAndMixingMedia {
            file {
              url
            }
          }
          djMedia {
            file {
              url
            }
          }
        }
      }
    `,
  )

  createPage({
    path: '/school',
    component: slash(School),
    context: schoolResults.data.contentfulSchoolPage,
  })
}
