const slash = require('slash')
const path = require('path')

const Prices = path.resolve(process.cwd(), 'src/components/pages/Prices/Prices.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(`
    {
      allContentfulPost(filter: {id: {eq: "post_874"}}) {
        edges {
          node {
            id
            title {
              title
            }
            content {
              content
            }
          }
        }
      }
    }
  `)

  createPage({
    path: '/prices',
    component: slash(Prices),
    context: {
      header: {
        title: result.data.allContentfulPost.edges[0].node.title.title,
        description: {description: 'Цены студии звукозаписи. Цены на аренду оборудования для мероприятий'},
      },
      content: result.data.allContentfulPost.edges[0].node.content.content.replace(/\n/g, '<br />'),
    },
  })
}
