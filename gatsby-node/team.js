const slash = require('slash')
const path = require('path')

const Team = path.resolve(process.cwd(), 'src/components/pages/Team/Team.js')

module.exports = async ({graphql, boundActionCreators: {createPage}}) => {
  const result = await graphql(
    `
      {
        allContentfulPost(filter: {id: {eq: "post_829"}}) {
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

  createPage({
    path: '/team',
    component: slash(Team),
    context: {
      title: result.data.allContentfulPost.edges[0].node.title.title,
      content: result.data.allContentfulPost.edges[0].node.content.content,
    },
  })
}
