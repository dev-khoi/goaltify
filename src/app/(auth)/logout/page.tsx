'use client'
import { useRouter } from "next/router"
import { useEffect } from "react";

const logoutPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=> {
            router.push("/")
        }, 1670)
    })

    return (
        <div>
            <h2>You have been logged out.</h2>
            <p>Redirecting to home...</p>
        </div>
    )
}

export default logoutPage