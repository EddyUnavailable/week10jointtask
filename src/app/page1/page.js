// "use client";
// import Image from "next/image";
// import { useEffect } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { ReactLenis } from "lenis/react";
// import scrollStyles from "../css/scroll.module.css"

// gsap.registerPlugin(ScrollTrigger);

// export default function page1() {
//   useEffect(() => {
//     const scrollTriggerSettings = {
//       trigger: "#main",
//       start: "top 25%",
//       toggleActions: "play reverse play reverse",
//     };

//     const leftXValues = [-800, -900, -400];
//     const rightXValues = [800, 900, 400];
//     const leftRotationalValues = [-30, -20, -35];
//     const rightRotationalValues = [30, 20, 35];
//     const yValues = [100, -150, -400];

//     gsap.utils.toArray(".row").forEach((row, index) => {
//       const cardLeft = row.querySelector("#card-left");
//       const cardRight = row.querySelector("#card-right");
  
//       gsap.to(cardLeft, {
//         x: leftXValues[index],
//         scrollTrigger: {
//           trigger: "#main",
//           start: "top center",
//           end: "150% bottom",
//           scrub: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
//             cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * leftRotationalValues[index]}deg)`;
//             cardRight.style.transform = `translateX(${progress * rightXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * rightRotationalValues[index]}deg)`;
//           },
//         },
//       });
  
//     });

//     gsap.to("#logo", {
//       scale: 1,
//       duration: 0.5,
//       ease: "power1.out",
//       scrollTrigger: scrollTriggerSettings,
//     });

//     gsap.to("#linep", {
//       y: 0,
//       stagger: 0.5,
//       duration: 0.5,
//       ease: "power1.out",
//       scrollTrigger: scrollTriggerSettings,
//     });

//     gsap.to("#button", {
//       y: 0,
//       opacity: 1,
//       delay: 0.25,
//       duration: 0.5,
//       ease: "power1.out",
//       scrollTrigger: scrollTriggerSettings,
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };

//   }, []);

//   const generateRows = () => {
//     const rows = [];
//     for (let i = 1; i <= 3; i++) {
//       rows.push(
//         <div className={scrollStyles.row} key={i}>
//           <div className={scrollStyles.card} id="card-left">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9WDlf951nDT57pZI2r0X8_GtTrDiqKdHHA&s" alt="" width={100} height={100} />
//           </div>
//           <div className={scrollStyles.card} id="card-right">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9WDlf951nDT57pZI2r0X8_GtTrDiqKdHHA&s" alt="" width={100} height={100} />
//           </div>
//         </div>
//       );
//     }
//     return rows;
//   };

//   return (
//     <>
//       <ReactLenis root>
//         <section className={scrollStyles.hero}>
//           <div className={scrollStyles.img}>
//             <img className={scrollStyles.img} src={ "tie-interceptor250.jpg" } alt="" width={100} height={100} />
//           </div>
//         </section>
//         <section className={scrollStyles.main} id="main">
//           <div className={scrollStyles.maincontent}>
//             <div className={scrollStyles.logo} id="logo">
//               <img className={scrollStyles.img} src="/star.png" alt="" width={100} height={100} />
//             </div>
//           </div>
//           <div className={`${scrollStyles.copy}${scrollStyles.line}`}>
//             <div className={scrollStyles.line}>
//               <p className={scrollStyles.ppp}>Delve into coding without clutter.</p>
//             </div>
//             <div className={scrollStyles.line} id="linep">
//               <p className={scrollStyles.ppp}>One subscription. Endless web design</p>
//             </div>
//             <div className={scrollStyles.line}>
//               <p className={scrollStyles.ppp}>Take the fast lane to mastery</p>
//             </div>
//           </div>
//           <div className={scrollStyles.btn}>
//             <button className={scrollStyles.button} id="button">Get PRO</button>
//           </div>
//           {generateRows()}
//         </section>

//         <section className={scrollStyles.footer}>
//           <Link href="">
//             Link in description
//           </Link>      
//         </section>
//       </ReactLenis>
//     </>
//   );
// }
