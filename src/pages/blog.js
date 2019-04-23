import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title,
                            date
                        }
                        excerpt,
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark.edges
    
    const renderPosts = (posts) => {
        return (
            <ol>
                {posts.map((edge) => {
                    const post = edge.node

                    return (
                        <li key={post.frontmatter.title}>
                            <Link to={`/blog/${post.fields.slug}`}>
                                <h2>{post.frontmatter.title}</h2>
                                <p>{post.frontmatter.date}</p>
                                <p>{post.excerpt}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        )
    }

    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                {posts.length === 0 ? 'No posts to show.' : renderPosts(posts)}
            </Layout>
        </div>
    )
}

export default BlogPage