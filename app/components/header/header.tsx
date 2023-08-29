"use client";

import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { PhSunDimDuotone } from "../icons/sun";
import { PhMoonDuotone } from "../icons/moon";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
    }
  }, []);

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

  return (
    <>
      <header className={styles.header}>
        <div className={styles["fluid-container"]}>
          <div className={styles.logo}>
            <span>UNI</span>Trading
          </div>

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
            <li>
              <a href={"/login"}>Login</a>
            </li>
            <li>
              <a href={"/register"}>Register</a>
            </li>
            <li onClick={changeTheme}>
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
            </li>
          </ul>
        </div>
      </header>

      <div className={styles["header-placeholder"]}></div>
    </>
  );
}
