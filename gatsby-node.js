const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const postTemplate = path.resolve('./src/templates/post.js')
    const response = await grapgh(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    const edges = res.data.allMarkdownRemark.edges
    
    edges.forEach((edge) => {
        createPage({
            component: postTemplate,
            path: `/blog/${edge.node.fields.slug}`
        })
    })
}