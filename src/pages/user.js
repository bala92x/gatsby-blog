import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import PrivateRoute from "../components/privateRoute"
import Profile from '../components/profile'

const User = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/user/profile" component={Profile} />
        </Router>
    </Layout>
)

export default User