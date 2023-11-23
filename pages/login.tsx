import React from 'react'
import { getSession, useSession } from 'next-auth/react';
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
            <div className='bg-login h-screen w-full flex justify-center items-center' >
                <div className='bg-black bg-opacity-50 w-1/4 text-white p-10 flex flex-col items-center'>
                    <span className='font-bold text-4xl pb-10'>Log in</span>
                    <GoogleSignInButton />
                </div>
            </div>
        )
    }
}
export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: {
            session,
        },
    };
}

export default login