"use client"
import { UserAuth } from "@/context/Auth";
import './signInWithGoogleButton.scss'
import Image from "next/image";
import searchImage from "@/assets/search.png"

export default function SignInWithGoogleButton() {

    const { GoogleSignIn } = UserAuth();

    return (
        <div className="sign_in_with_google">
            <button onClick={GoogleSignIn}>
                <Image src={searchImage}  alt=""/>
                Sign in with Google</button>
        </div>
    )
}