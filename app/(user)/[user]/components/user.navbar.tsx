"use client"
import { UserAuth } from "@/context/Auth"
import Link from "next/link"
import { useEffect } from "react"

const navLinks = [
    {
        name: 'Dashboard',
        path: ''
    },
    {
        name: "Investments",
        path: '/investment'
    },
    {
        name: 'Management',
        path: '/management'
    },
    {
        name: 'Profiles',
        path: '/profile',
    }
]

export const UserNavBar = () => {
    const { user } = UserAuth()

    useEffect(() => {
        console.log(user);
        
    }, [user])

    return(<>
        <ul>
            {navLinks.map((navLink) => {
                return(<>
                    <li>
                        <Link href={`/${user?.uid}/${navLink.path}`} >{navLink.name}</Link>
                    </li>
                </>)
            })}            
        </ul>
    </>)
}

