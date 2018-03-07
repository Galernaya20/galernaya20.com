const slash = require('slash')
const path = require('path')

const InTheBox = path.resolve(process.cwd(), 'src/components/pages/InTheBox/InTheBox.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const inTheBoxResults = await graphql(
    `
      {
        contentfulInTheBox {
          header {
            title
            description {
              description
            }
          }
          introduction {
            introduction
          }
          aboutCourse {
            aboutCourse
          }
          pricesAndContacts {
            pricesAndContacts
          }
        }
      }
    `,
  )

  createPage({
    path: '/inthebox',
    component: slash(InTheBox),
    context: inTheBoxResults.data.contentfulInTheBox,
  })
}
