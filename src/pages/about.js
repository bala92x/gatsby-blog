import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I currently work as a full-stack developer.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage