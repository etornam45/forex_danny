"use client"
import styles from "./hero.module.scss"

import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroSection() {
  return (
    <div className={styles.back}>
      <div className={styles.hero} id="hero">
        <div className={"fluid-container"}>
          <div className={styles.flex}>
            <h1>
            Mastering the art of Achieving financial stability with forex trading
            </h1>
            <p>Finding balance amidst market votality:The art of breaking even in forex trading</p>
            <button>
              Get Started
            </button>
          {/* <div className="left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores necessitatibus consequuntur quis excepturi ut dolore, a, distinctio nulla eius sit alias nisi maiores itaque delectus laborum nesciunt sed accusamus.</p>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
