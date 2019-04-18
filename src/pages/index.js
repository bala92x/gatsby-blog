import React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {

    return (
        <div>
            <h1>Hello,</h1>
            <h2>I'm Bálint, a full-stack developer living in Hungary.</h2>
            <p>Need a developer? <Link to="/contact">Contact me</Link>.</p>
        </div>
    )
}

export default IndexPage