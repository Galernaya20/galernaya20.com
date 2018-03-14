const slash = require('slash')
const path = require('path')

const RawContentTitle = path.resolve(process.cwd(), 'src/components/pages/RawContentTitle/RawContentTitle.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(
    `
      {
        allContentfulPost(filter: {id: {eq: "post_12"}}) {
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
    `,
  )

  if (result.errors) {
    throw new Error(result.errors)
  }

  createPage({
    path: '/contacts',
    component: slash(RawContentTitle),
    context: {
      title: result.data.allContentfulPost.edges[0].node.title.title,
      content: result.data.allContentfulPost.edges[0].node.content.content,
    },
  })
}
