"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import Menu from "@/components/menu/Menu"; 


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div className="page-content hero">
      <Menu />  
      <h1>
        Home page
      </h1>
    </div>
  );
}

