import React from 'react'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../services/auth'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (!isLoggedIn() && location.pathname !== `/user/login`) {
        // If the user is not logged in, redirect to the login page.
        navigate(`/user/login`)
        return null
    }

    return <Component {...rest} />
}

export default PrivateRoute