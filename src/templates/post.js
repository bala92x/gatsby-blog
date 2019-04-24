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
` 
const Post = (props) => {
    const post = props.data.contentfulBlogPost

    return (
        <Layout>
            <h1>{post.title}</h1>
            <p>{post.publishedDate}</p>
            <div dangerouslySetInnerHTML={{ __html: post.body.json }}></div>
        </Layout>
    )
}*/

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
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                const image = node.data.target.fields
                const alt = image.title['en-US']
                const url = image.file['en-US'].url

                return <img alt={alt} src={url} />
            }
        }
    }
    
    return (
        <Layout>
            <h1>{post.title}</h1>
            <p>{post.publishedDate}</p>
            {documentToReactComponents(post.body.json, options)}
        </Layout>
    )
}

export default Post