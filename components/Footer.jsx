"use client";
import { openingHours, socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const Footer = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 50%",
      },
      ease: "power1.inOut",
    });

    timeline
      .from("#contact h2", {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        ease: "power1.inOut",
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.02,
      });
  });
  return (
    <footer
      id="contact"
      className="relative md:mt-20 mt-0 px-4 text-center w-full overflow-hidden radial-gradient"
    >
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-r-leaf"
        className="absolute top-0 right-0 pointer-events-none hidden lg:block"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-l-leaf"
        className="absolute bottom-0 left-0 pointer-events-none lg:w-fit w-1/3"
      />
      <img
        src="/images/footer-drinks.png"
        alt="drinks"
        id="f-drinks"
        className="absolute bottom-0 right-0 lg:w-96 w-1/3 pointer-events-none"
      />

      <div className="container mx-auto lg:py-14 2xl:py-32 py-16 flex flex-col justify-between gap-5 min-h-dvh">
        <h2 className="lg:text-6xl 2xl:text-8xl text-5xl font-modern-negra md:translate-y-0 translate-y-5">
          Where to Find Us
        </h2>
        <div>
          <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">
            Visit Us
          </h3>
          <p>123 Main Street, los angeles, USA</p>
        </div>
        <div>
          <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">
            Call Us
          </h3>
          <p className="lg:text-2xl 2xl:text-3xl text-sm">+1 234 567 890</p>
          <p className="lg:text-2xl 2xla:text-3xl text-sm">
            hello@cocktail.com
          </p>
        </div>

        <div>
          <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">
            {" "}
            Open EveryDay
          </h3>
          {openingHours.map((time) => (
            <p className="lg:text-2xl 2xl:text-3xl text-sm" key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">
            {" "}
            Socials
          </h3>
          <div className="flex items-center justify-center gap-5">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
