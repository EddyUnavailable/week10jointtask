"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/work", label: "Work" }
];

const Menu = () => {
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 75, opacity: 0 });

        tl.current = gsap.timeline({ paused: true })
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut"
            })
            .to(".menu-link-item-holder", {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut"
            }, "-=0.75");
    }, { scope: container });

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <div className="menu-container" ref={container}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link href="/">Company</Link>
                </div>
                <div className="about">
                    <Link href="/about">About</Link>
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>

            <div className="menu-overlay"></div>

            <div className={`menu-content ${isMenuOpen ? "open" : ""}`}>
                <div className="menu-close" onClick={toggleMenu}>
                    <p>×</p>
                </div>
                <div className="menu-close-icon">X</div>
                <div className="menu-links">
                    {menuLinks.map((link, index) => (
                        <div className="menu-link-item" key={index}>
                            <div className="menu-link-item-holder" onClick={toggleMenu}>
                                <Link href={link.path} className="menu-link">
                                    {link.label}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="menu-info">
                    <div className="menu-info-col">
                        <a href="#">Instagram </a>
                        <a href="#">Facebook </a>
                        <a href="#">Linkedin </a>
                    </div>
                    <div className="menu-info-col">
                        <p>info@company.com</p>
                        <p>445 678 789</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Menu;