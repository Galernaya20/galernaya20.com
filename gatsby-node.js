//@flow

const path = require('path')
const slash = require('slash')

const RawContentTitle = path.resolve(process.cwd(), 'src/components/pages/RawContentTitle/RawContentTitle.js')
const Studio = path.resolve(process.cwd(), 'src/components/pages/Studio/Studio.js')

exports.createPages = async ({graphql, boundActionCreators} /*:any*/) => {
  const {createPage} = boundActionCreators

  const contactsResult = await graphql(
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
  const trainingResult = await graphql(
    `
      {
        allContentfulPost(filter: {id: {eq: "post_2238"}}) {
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
  const studioResults = await graphql(
    `
      {
        contentfulPage {
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
          review {
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
  if (contactsResult.errors) {
    throw new Error(contactsResult.errors)
  }

  if (trainingResult.errors) {
    throw new Error(trainingResult.errors)
  }

  createPage({
    path: '/contacts',
    component: slash(RawContentTitle),
    context: {
      title: contactsResult.data.allContentfulPost.edges[0].node.title.title,
      content: contactsResult.data.allContentfulPost.edges[0].node.content.content,
    },
  })

  createPage({
    path: '/training',
    component: slash(RawContentTitle),
    context: {
      title: trainingResult.data.allContentfulPost.edges[0].node.title.title,
      content: trainingResult.data.allContentfulPost.edges[0].node.content.content,
    },
  })

  const studioData = require('./src/components/pages/Studio/fixture')

  createPage({
    path: '/',
    component: slash(Studio),
    context: Object.assign({}, studioData, {
      header: studioResults.data.contentfulPage.header,
      reviews: studioResults.data.contentfulPage.review,
    }),
  })
  return Promise.resolve()
}
