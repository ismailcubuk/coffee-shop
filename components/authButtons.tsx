import React from 'react'
import { signIn, signOut } from "next-auth/react"
import googleLogo from '@/public/googleLogo.png'
import Image from 'next/image'

export function GoogleSignInButton() {
    return (
        <button 
        onClick={() => signIn("google")}
        className='flex items-center w-full gap-4 justify-center bg-secondary py-2'
        >
            <Image src={googleLogo} alt='Google Logo' width={40} height={40} />
            <span className='font-bold text-xl'>Continue with Google</span>
        </button>
    )
}
export function GoogleSignOutButton() {
    return (
        <button onClick={() => signOut()}>Sign Out</button>
    )
}