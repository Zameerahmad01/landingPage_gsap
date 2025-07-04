"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const titleSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paraSplit = new SplitText(".para", {
      type: "lines",
    });

    titleSplit.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });

    gsap.from(titleSplit.chars, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.05,
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.05,
      delay: 1,
    });

    gsap.from(".paraTitle", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      stagger: 0.05,
      delay: 0.5,
    });
    gsap.from(".paraLink", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      stagger: 0.05,
      delay: 1.5,
    });

    const heroTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTween.to(
      ".right-leaf",
      {
        y: 200,
      },
      0
    );
    heroTween.to(
      ".left-leaf",
      {
        y: -200,
      },
      0
    );
  }, []);
  return (
    <section
      className="relative z-10 pt-20 min-h-dvh w-full border border-transparent "
      id="hero"
    >
      <h1 className="title  text-8xl md:text-[15vw] text-center leading-none font-modern-negra">
        MOJITO
      </h1>
      <img
        src="/images/cocktail-left-leaf.png"
        alt="leaf"
        className="left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="leaf"
        className="right-leaf"
      />

      <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
        <div className="content flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
          <div className="space-y-3 hidden md:block">
            <p className="paraTitle 2xl:text-start text-center">
              Simple Ingredients, Bold Flavor
            </p>
            <p className="para font-modern-negra text-5xl text-yellow max-w-xl">
              Sip the spirit <br /> of summer
            </p>
          </div>

          <div className="space-y-3 text-lg lg:max-w-2xs md:max-w-xs w-full">
            <p className="para text-left text-base">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>

            <Link
              href="#"
              className=" font-semibold opacity-80 xl:text-start text-center hover:text-yellow"
            >
              <p className="paraLink">View cocktails</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
