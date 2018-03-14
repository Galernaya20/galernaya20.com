const slash = require('slash')
const path = require('path')

const Equipment = path.resolve(process.cwd(), 'src/components/pages/Equipment/Equipment.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(`
    {
      contentfulEquipmentPage {
        header {
          title
          description {
            description
          }
        }
        tabs {
          title
          content {
            content
          }
        }
      }
    }
  `)

  createPage({
    path: '/equipment',
    component: slash(Equipment),
    context: result.data.contentfulEquipmentPage,
  })
}
