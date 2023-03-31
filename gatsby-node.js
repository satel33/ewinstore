const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allPrismicBusinessCase {
        nodes {
          id
          uid
        }
      }
      allPrismicNews {
        nodes {
          id
          uid
        }
      }
    }
  `)

  queryResults.data.allPrismicBusinessCase?.nodes.forEach(node => {
    createPage({
      path: `/case/${node.uid}`,
      component: path.resolve(`src/templates/business-case.js`),
      context: {
        id: node.id,
      },
    })
  })
  queryResults.data.allPrismicNews?.nodes.forEach(node => {
    createPage({
      path: `/news/${node.uid}`,
      component: path.resolve(`src/templates/news-detail.js`),
      context: {
        id: node.id,
      },
    })
  })
}
