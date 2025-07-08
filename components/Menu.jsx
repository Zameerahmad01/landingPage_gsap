"use client";
import { sliderLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const Menu = () => {
  const contentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".cocktail img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details h2",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".details p",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

  const totalSlides = sliderLists.length;
  const gotoSLide = (index) => {
    const newIndex = (index + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  };

  const currentCocktailAt = (indexOfSet) => {
    return sliderLists[(currentIndex + indexOfSet + totalSlides) % totalSlides];
  };
  const currentCocktail = currentCocktailAt(0);
  const nextCocktail = currentCocktailAt(1);
  const prevCocktail = currentCocktailAt(-1);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient overflow-hidden"
    >
      <h2 id="menu-heading" className="sr-only">
        Menu
      </h2>
      <nav
        className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto
"
        aria-labelledby="cocktail Navigation"
      >
        {sliderLists.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              onClick={() => gotoSLide(index)}
              key={index}
              className={`md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b-1 transition-colors font-modern-negra ${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="content flex flex-col justify-between items-center container mx-auto relative">
        <div className="arrows flex items-center justify-between w-full absolute">
          <button
            className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36"
            onClick={() => gotoSLide(currentIndex - 1)}
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {prevCocktail.name}
            </span>
            <img
              src="/images/right-arrow.png"
              alt="right arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36"
            onClick={() => gotoSLide(currentIndex + 1)}
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {nextCocktail.name}
            </span>
            <img
              src="/images/left-arrow.png"
              alt="left arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail flex items-center justify-center ">
          <img
            src={currentCocktail.image}
            alt=""
            className="object-contain h-[60vh]"
          />
        </div>

        <div className="recipe flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
          <div ref={contentRef} className="info space-y-4 lg:translate-y-20">
            <p>Recipe for:</p>
            <p
              id="title"
              className="font-modern-negra md:text-6xl text-3xl text-yellow max-w-40"
            >
              {currentCocktail.name}
            </p>
          </div>
          <div className="details space-y-5 md:max-w-md text-left">
            <h2 className="md:text-5xl text-3xl font-serif">
              {currentCocktail.title}
            </h2>
            <p className="md:text-lg pe-5">{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
