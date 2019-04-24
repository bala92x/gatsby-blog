import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer' 

import Layout from '../components/layout'

/* export const markdownQquery = graphql`
    query (
        $slug: String
    )
    {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        )
        {
            frontmatter {
                title,
                date
            },
            html
        }
    }
` */

export const contentfulQquery = graphql`
    query (
        $slug: String
    )
    {
        contentfulBlogPost (
            slug: {
                eq: $slug
            }
        )
        {
            title,
            publishedDate(fromNow: true),
            body {
                json
            }
        }
    }
`

const Post = (props) => {
    const post = props.data.contentfulBlogPost
    
    return (
        <Layout>
            <h1>{post.title}</h1>
            <p>{post.publishedDate}</p>
            {documentToReactComponents(post.body.json)}
        </Layout>
    )
}

export default Post