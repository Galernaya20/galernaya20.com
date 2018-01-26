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
          logo {
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

  createPage({
    path: '/',
    component: slash(Studio),
    context: studioResults.data.contentfulStudioPage,
  })
  return Promise.resolve()
}
