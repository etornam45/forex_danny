"use client";

import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { PhSunDimDuotone } from "../icons/sun";
import { PhMoonDuotone } from "../icons/moon";
import { PhListDuotone } from "../icons/humburger";
import { IcRoundClose } from "../icons/close";
import { UserAuth } from "@/context/Auth";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../logo";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [navState, setNavState] = useState(false);
  const { user, setUser, GoogleSignIn } = UserAuth();

  useEffect(() => {
    console.log(user);

    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
    }

    if (window.innerWidth > 768) {
      setNavState(true);
    }
  });

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }

  function toggleNavigation() {
    setNavState(!navState);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles["fluid-container"]}>
          <Logo />

          {navState && (
            <ul className={styles["navbar"]}>
              <li>
                <a href={"/"}>Home</a>
              </li>
              <li>
                <a href={"/about"}>About</a>
              </li>
              <li>
                <a href={"/services"}>Services</a>
              </li>
              <li>
                <a href={"/contact"}>Contact</a>
              </li>

              {user ? (
                <></>
              ) : (
                <>
                  <li>
                    <a href="/signin">Login</a>
                  </li>
                  <li>
                    <a href="/signup">Register</a>
                  </li>
                </>
              )}
            </ul>
          )}
          <div className={styles.control}>
            <div onClick={changeTheme}>
              {theme === "light" ? (
                <>
                  <div className="theme-icon">
                    <PhSunDimDuotone width={20} />
                  </div>
                </>
              ) : (
                <>
                  <div className="theme-icon">
                    <PhMoonDuotone width={20} />
                  </div>
                </>
              )}
            </div>

            <Link href={`/${user?.uid}`}>
              {user && (
                <div className="user">
                  {user.photoURL? (<><Image
                    src={user.photoURL}
                    alt={user.displayName}
                    height={30}
                    width={30}
                  /></>): (<><img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                    alt={user.displayName}
                  /></>)}
                  
                  
                </div>
              )}
            </Link>

            <div className={styles["humb"]} onClick={toggleNavigation}>
              {!navState ? (
                <PhListDuotone fill="var(--color)" />
              ) : (
                <IcRoundClose />
              )}
            </div>
          </div>
        </div>
      </header>

      <div className={styles["header-placeholder"]}></div>
    </>
  );
}
