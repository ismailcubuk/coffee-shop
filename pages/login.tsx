import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


const login = () => {
    const { data: session } = useSession()
    console.log(session);
    
    if (session) {
        return (
            <div>
                <p>Wellcome, {session.user?.email}</p>
                <img src={session.user?.image} alt="" />
                <p>name {session.user?.name}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
                <button onClick={() => signIn()} className='border-2'>Sign in</button>
            </div>
        )
    }
}

export default login