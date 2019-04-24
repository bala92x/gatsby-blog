import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Auth from "../services/auth"

import headerStyles from './header.module.scss'

const Header = () => {
    const auth = new Auth()
    const { isAuthenticated } = auth
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const content = { message: "", login: true }

    if (isAuthenticated()) {
        content.message = `Hello, ${auth.getUser().name}`
    } else {
        content.message = "You are not logged in"
    }

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link
                            activeClassName={headerStyles.activeNavItem}
                            className={headerStyles.navItem}
                            to="/"
                        >
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={headerStyles.activeNavItem}
                            className={headerStyles.navItem}
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={headerStyles.activeNavItem}
                            className={headerStyles.navItem}
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={headerStyles.activeNavItem}
                            className={headerStyles.navItem}
                            to="/contact"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={headerStyles.activeNavItem}
                            className={headerStyles.navItem}
                            to="/user/profile"
                        >
                            Profile
                        </Link>
                    </li>
                    {isAuthenticated() ? (
                        <button onClick={auth.logout}>
                            Logout
                        </button>
                    )
                    : (
                        <button onClick={auth.login}>
                            Login
                        </button>
                    )}
                </ul>
                <span>{content.message}</span>
            </nav>
        </header>
    )
}

export default Header