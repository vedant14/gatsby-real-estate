exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      gcms: { properties },
    },
  } = await graphql(`
    {
      gcms {
        properties(stage: PUBLISHED) {
          id
        }
      }
    }
  `)

  properties.forEach(({ id }) =>
    createPage({
      path: `/properties/${id}`,
      component: require.resolve(`./src/templates/PropertyPage.js`),
      context: {
        id,
      },
    })
  )
}
