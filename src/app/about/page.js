"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import styles from '../css/nav.module.css';


gsap.registerPlugin(ScrollTrigger);

export default function page2() {
  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationalValues = [-30, -20, -35];
    const rightRotationalValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = row.querySelector(".card-left");
      const cardRight = row.querySelector(".card-right");
  
      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * leftRotationalValues[index]}deg)`;
            cardRight.style.transform = `translateX(${progress * rightXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * rightRotationalValues[index]}deg)`;
          },
        },
      });
  
    });

    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".line p", {
      y: 0,
      stagger: 0.5,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src="https://cdn2.picryl.com/photo/1900/12/31/lely-sir-peter-portrait-of-a-lady-in-blue-holding-a-flower-google-art-project-70eaf7-1024.jpg" alt="" width={100} height={100} />
          </div>
          <div className="card card-right">
            <img src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={100} height={100} />
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <ReactLenis root>
  <nav className={styles.nav}>
    <div className={styles['nav-links']}>
      <div className={styles.company}>
        <Link href="/" className="white-text">Company</Link>
      </div>
      <div className={styles.about}>
        <Link href="/about" className="white-text">About</Link>
      </div>
      <div className={styles.menu}>
        <Link href="/" className="white-text">Menu</Link>
      </div>
    </div>
  </nav>
        <section className="hero">
          <div className="hero-img">
            <img src="/whitestar.png" alt="" width={20} height={20} />
          </div>
        </section>
        <section className="main">
          <div className="main-content">
            <div className="logo">
              <img src="/whitestar.png" alt="" width={100} height={100} />
            </div>
          </div>
          <div className="btn">
            <button>Get PRO</button>
          </div>
          {generateRows()}
        </section>

        <section className="footer">
          <Link href="">
            a super cool section
          </Link>      
        </section>
      </ReactLenis>
    </>
  );
}