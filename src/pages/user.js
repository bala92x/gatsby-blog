import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import PrivateRoute from "../components/privateRoute"
import Profile from '../components/profile'
import Login from '../components/login'

const User = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/user/profile" component={Profile} />
            <Login path="/user/login" />
        </Router>
    </Layout>
)

export default User