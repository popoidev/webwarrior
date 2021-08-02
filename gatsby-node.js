const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
        query Projects {
            projects: allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `)

    console.log(data)

    data.projects.edges.forEach(project => {
        const { slug } = project.node.frontmatter

        actions.createPage({
            path: `/projects/${ slug }`,
            component: path.resolve('./src/templates/project-details.js'),
            context: { slug }
        })
    })
}