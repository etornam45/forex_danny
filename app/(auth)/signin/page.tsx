"use client";
import SignInWithGoogleButton from "@/(auth)/signInWithGoogleButton";
import "./page.scss";
import { useState } from "react";
import { UserAuth } from "@/context/Auth";

export default function SignUp() {

  const { signInWithPassword } = UserAuth();

  function handleSubmit(e: any) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    signInWithPassword(formJson.email, formJson.password);
  }

  return (
    <section className="signin">
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome Back</h2>
            <h4 className="animation a2">
              Log in to your account using email and password
            </h4>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-field animation a3"
              placeholder="Email Address"
              name="email"
            />
            <input
              type="password"
              className="form-field animation a4"
              placeholder="Password"
              name="password"
            />
            <p className="animation a5">
              <a href="#">Forgot Password</a>
            </p>
            <button className="animation a6">LOGIN</button>
            <p>Dont have an account? <a href="/signup">sign up</a></p>
          </form>
          <SignInWithGoogleButton />  
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
}
