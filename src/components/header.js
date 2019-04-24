import React from 'react'
import { Link, navigate, graphql, useStaticQuery } from 'gatsby'
import { getUser, isLoggedIn, logout } from "../services/auth"

import headerStyles from './header.module.scss'

const Header = () => {
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

    if (isLoggedIn()) {
        content.message = `Hello, ${getUser().name}`
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
                    {isLoggedIn() && (
                        <li>
                            <a
                                href="/"
                                onClick={(event) => {
                                    event.preventDefault()
                                    logout(() => navigate(`/user/login`))
                                }}
                            >
                                Logout
                            </a>
                        </li>
                    )}
                </ul>
                <span>{content.message}</span>
            </nav>
        </header>
    )
}

export default Header