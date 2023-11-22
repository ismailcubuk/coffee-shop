import React from 'react'
import { signIn, signOut } from "next-auth/react"

export function GoogleSignInButton() {
    return (
        <button onClick={() => signIn("google")}>Sign In</button>
    )
}
export function GoogleSignOutButton() {
    return (
        <button onClick={() => signOut()}>Sign Out</button>
    )
}