//@flow

const path = require('path')
const slash = require('slash')

const contacts = path.resolve(process.cwd(), 'src/components/pages/Contacts/Contacts.js')

exports.createPages = async ({graphql, boundActionCreators} /*:any*/) => {
  const {createPage} = boundActionCreators

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
    component: slash(contacts),
    context: {html: result.data.allContentfulPost.edges[0].node.content.content},
  })

  return Promise.resolve()
}
