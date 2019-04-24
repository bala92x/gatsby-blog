import React from 'react'
import Auth from "../services/auth"

const Profile = () => {
    const auth = new Auth()

    return (
        <>
            <h1>Your profile</h1>
            <ul>
                <li>Name: {auth.getUser().name}</li>
                <li>E-mail: {auth.getUser().email}</li>
            </ul>
        </>
    )
}

export default Profile