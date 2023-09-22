"use client";
import SignInWithGoogleButton from "@/(auth)/signInWithGoogleButton";
import "../signin/page.scss";
import { UserAuth } from "@/context/Auth";

export default function SignUp() {

  const {signUpWithPassword} = UserAuth()

  function handleSubmit(e: any) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    signUpWithPassword(formJson.email, formJson.password, formJson.name);
  }

  return (
    <section className="signin">
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Almost there</h2>
            <h4 className="animation a2">
              Create an account to get started with forex marketing
            </h4>
          </div>
          <form className="form" onSubmit={handleSubmit}>     
            <input
              type="text"
              className="form-field animation a3"
              placeholder="Full Name"
              name="name"
            />
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
            <p>Already have an account? <a href="/signin">sign in</a></p>
          </form>
          <SignInWithGoogleButton />

        </div>
        <div className="right"></div>
      </div>
    </section>
  );
}
