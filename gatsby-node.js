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
    }
  `)

  queryResults.data.allPrismicBusinessCase?.nodes.forEach(node => {
    createPage({
      path: `/case/${node.uid}`,
      component: path.resolve(`src/templates/case.js`),
      context: {
        id: node.id,
      },
    })
  })
}
