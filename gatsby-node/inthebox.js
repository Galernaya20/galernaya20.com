const slash = require('slash')
const path = require('path')

const InTheBox = path.resolve(process.cwd(), 'src/components/pages/InTheBox/InTheBox.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(
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
    context: result.data.contentfulInTheBox,
  })
}
