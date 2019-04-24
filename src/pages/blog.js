import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    /* const markdownDdata = useStaticQuery(graphql`
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
    `) */

    const contentfulData = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title,
                        slug,
                        publishedDate(fromNow:true)
                    }
                }
            }
        }
    `)

    const posts = contentfulData.allContentfulBlogPost.edges
    
    const renderPosts = (posts) => {
        return (
            <ol className={blogStyles.posts}>
                {posts.map((edge) => {
                    const post = edge.node

                    return (
                        <li
                            className={blogStyles.post}
                            key={post.title}
                        >
                            <Link to={`/blog/${post.slug}`}>
                                <h2>{post.title}</h2>
                                <p>{post.publishedDate}</p>
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