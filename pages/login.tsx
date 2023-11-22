import React from 'react'
import { useSession } from "next-auth/react"
import { GoogleSignInButton, GoogleSignOutButton } from '@/components/authButtons';


const login = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <div>
                <p>Wellcome, {session.user?.email}</p>
                <img src={session.user?.image} alt="" />
                <p>name {session.user?.name}</p>
                <GoogleSignOutButton />
            </div>
        )
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
                <GoogleSignInButton />
            </div>
        )
    }
}

export default login