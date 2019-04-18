import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <p>The best way to reach me is via <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>.</p>
            <Footer />
        </div>
    )
}

export default ContactPage