'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';

function TypoAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let lenis;
    const text = new SplitType('.target');

    const initSmooth = () => {
      lenis = new Lenis({
        lerp: 0.2,
        smooth: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      const chars = text.chars;
      const words = text.words;

      words.forEach((word) => {
        chars.forEach((char) => {
          gsap.set(char.parentNode, { perspective: 200 });
        });

        gsap.fromTo(
          chars,
          {
            'will-change': 'opacity, transform',
            opacity: 0,
            y: (position, _, arr) => -40 * Math.abs(position - arr.length / 2),
            z: () => gsap.utils.random(-500, -200),
          },
          {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
            z: 0,
            rotationX: 0,
            stagger: {
              each: 0.03,
              from: 'center',
            },
            scrollTrigger: {
              trigger: word,
              start: 'top bottom+=100',
              end: 'top top+=10',
              scrub: 0.5,
            },
          }
        );
      });
    };

    const init = () => {
      initSmooth();
      scroll();
    };

    init();
  }, []);

  return (
    <div className="text-white">
      <div className="relative w-full h-screen flex justify-center items-center">
      <div className="absolute text-center mt-[200px]">
  <h2 className="content_title text-[8vw] leading-[0.8] text-white">
    <span className="uppercase target">SOME COOL</span>
    <span className="uppercase target">CAPTURE</span>
  </h2>
</div>
      </div>
  
      <div className="flex flex-col w-full max-w-[660px] mx-auto relative px-8 py-6 mb-[350px] text-[1.25rem] leading-normal text-white">
        <p className="max-w-[660px] mx-auto my-6 text-[1.25rem] leading-normal text-white">
        </p>
      </div>
    </div>
  );
}

export default TypoAnimation;


