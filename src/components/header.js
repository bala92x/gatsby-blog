import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    Budavölgyi Bálint
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
                </ul>
            </nav>
        </header>
    )
}

export default Header