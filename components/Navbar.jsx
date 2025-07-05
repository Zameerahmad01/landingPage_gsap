"use client";
import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline()
      .from(".logo", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .from(".navLinks", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.05,
      });

    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "header",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "header",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <header className="fixed z-50 w-full py-5 flex items-center ">
      <nav className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          <Link
            href="#"
            className="logo flex items-center gap-2 overflow-hidden"
          >
            <Image
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="h-6 w-6 "
            />
            <p className="text-2xl font-semibold font-modern-negra -mb-2">
              Cocktails
            </p>
          </Link>
          <div className="flex items-center justify-center flex-wrap gap-7 lg:gap-12 overflow-hidden">
            {navLinks.map((link, index) => (
              <Link
                href={link.id}
                key={index}
                className="navLinks text-sm md:text-base text-nowrap font-semibold"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
