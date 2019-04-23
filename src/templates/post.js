import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
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
    const post = props.data.markdownRemark
    
    return (
        <Layout>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Layout>
    )
}

export default Post