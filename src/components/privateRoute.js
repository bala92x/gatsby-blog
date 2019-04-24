import React from 'react'
import Auth from '../services/auth'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const auth = new Auth()
    const { isAuthenticated } = auth

    if (!isAuthenticated() && location.pathname !== `/user/login`) {
        // If the user is not logged in, redirect to the login page.
        auth.login()
        return null
    }

    return <Component {...rest} />
}

export default PrivateRoute