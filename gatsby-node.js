//@flow

const path = require('path')
const slash = require('slash')

const RawContentTitle = path.resolve(process.cwd(), 'src/components/pages/RawContentTitle/RawContentTitle.js')
const Studio = path.resolve(process.cwd(), 'src/components/pages/Studio/Studio.js')
const School = path.resolve(process.cwd(), 'src/components/pages/School/School.js')
const Team = path.resolve(process.cwd(), 'src/components/pages/Team/Team.js')
const Production = path.resolve(process.cwd(), 'src/components/pages/Production/Production.js')
const InTheBox = path.resolve(process.cwd(), 'src/components/pages/InTheBox/InTheBox.js')
const Equipment = path.resolve(process.cwd(), 'src/components/pages/Equipment/Equipment.js')
const StudioA = path.resolve(process.cwd(), 'src/components/pages/StudioA/StudioA.js')

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
          reviews {
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
          logos {
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
  const productionResults = await graphql(
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
        contentfulProductionPage {
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
          logos {
            title
            image {
              file {
                url
              }
            }
          }
          arrangement {
            ...InfoWithPrice
          }
          consolidation {
            ...InfoWithPrice
          }
          soundCloud {
            iframe {
              iframe
            }
          }
          studioRental {
            title
            description {
              description
            }
            videoLeft
            videoRight
            price
          }
          reviews {
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
  const teamResult = await graphql(
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

  const equipmentResult = await graphql(`
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

  const studioAResult = await graphql(`
    {
      allContentfulStudioDescriptionPage(filter: {id: {eq: "c28EHNdy71uIq4Co2imISU6"}}) {
        edges {
          node {
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
            info {
              title
              description {
                description
              }
            }
            infoMedia {
              file {
                url
              }
            }
            navigation {
              title
              link
            }
            production {
              title
              description {
                description
              }
              price
              link
            }
            reviews {
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
            logos {
              image {
                file {
                  url
                }
              }
            }
            rentPrice {
              title
              description {
                description
              }
            }
          }
        }
      }
    }
  `)
  const studioBResult = await graphql(`
    {
      allContentfulStudioDescriptionPage(filter: {id: {eq: "c6yaFmtKBFKEUOSAuCcU4Gw"}}) {
        edges {
          node {
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
            info {
              title
              description {
                description
              }
            }
            infoMedia {
              file {
                url
              }
            }
            navigation {
              title
              link
            }
            production {
              title
              description {
                description
              }
              price
              link
            }
            reviews {
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
            logos {
              image {
                file {
                  url
                }
              }
            }
            rentPrice {
              title
              description {
                description
              }
            }
          }
        }
      }
    }
  `)

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
    path: '/team',
    component: slash(Team),
    context: {
      title: teamResult.data.allContentfulPost.edges[0].node.title.title,
      content: teamResult.data.allContentfulPost.edges[0].node.content.content,
    },
  })

  createPage({
    path: '/',
    component: slash(Studio),
    context: studioResults.data.contentfulStudioPage,
  })
  createPage({
    path: '/school',
    component: slash(School),
    context: schoolResults.data.contentfulSchoolPage,
  })
  createPage({
    path: '/production',
    component: slash(Production),
    context: productionResults.data.contentfulProductionPage,
  })
  createPage({
    path: '/inthebox',
    component: slash(InTheBox),
    context: inTheBoxResults.data.contentfulInTheBox,
  })
  createPage({
    path: '/equipment',
    component: slash(Equipment),
    context: equipmentResult.data.contentfulEquipmentPage,
  })
  createPage({
    path: '/studio-a',
    component: slash(StudioA),
    context: studioAResult.data.allContentfulStudioDescriptionPage.edges[0].node,
  })
  createPage({
    path: '/studio-b',
    component: slash(StudioA),
    context: studioBResult.data.allContentfulStudioDescriptionPage.edges[0].node,
  })
  return Promise.resolve()
}
