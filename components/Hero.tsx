"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import CountUp from 'react-countup';

interface Hero {
  image: string;
  title: string;
}

const splitTextIntoSpans = (selector: any) => {
  var element = document.querySelector(selector);
  if (element) {
    var text = element.innerText;
    var splitText = text
      .split("")
      .map((char: String) => `<span class="relative -z-20 text-black ${element.parentElement.classList.contains('logo') && 'top-[120px]'}">${char}</span>`)
      .join("");
    element.innerHTML = splitText;
  }
}

const animateText = () => {
  setTimeout(() => {
    gsap.to(".counter span", {
      opacity: "0",
      stagger: 0.1,
      ease: "power3.inOut",
      duration: 1,
    });

    gsap.to(".logo p span", {
      top: "0",
      stagger: 0.1,
      ease: "power3.inOut",
      duration: 1,
    });

    gsap.to(".logo p span", {
      top: "-400px",
      stagger: 0.1,
      ease: "power3.inOut",
      duration: 1,
      delay: 3,
    });

    gsap.to(".overlay", {
      opacity: 0,
      ease: "power3.inOut",
      duration: 1,
      delay: 4,
    });

    gsap.to(".hero img", {
      scale: 1,
      ease: "power3.inOut",
      duration: 2,
      delay: 3.5,
    });

    gsap.to(".hero-copy h1 span", {
      top: "0",
      stagger: 0.1,
      ease: "power3.inOut",
      duration: 2,
      delay: 4,
    });

    gsap.to("nav", {
      top: "0",
      ease: "power3.inOut",
      duration: 2,
      delay: 4,
    });
  }, 300);
}

const Hero = ({ image, title}: Hero) => {
  useEffect(() => {
    splitTextIntoSpans(".logo p");
    splitTextIntoSpans(".hero-copy h1");
  
    gsap.to(".img-holder img", {
      left: 0,
      stagger: 0.1,
      ease: "power4.out",
      duration: 1.5,
      delay: 4,
    });
  
    gsap.to(".img-holder img", {
      left: "110%",
      stagger: -0.1,
      ease: "power4.out",
      duration: 1.5,
      delay: 7,
    });
  }, []);
  
  return (
    <section>
      <nav
        className="fixed -top-[120px] w-full p-4 flex items-center z-10"
      >
        <div className="nav-logo flex-1">
          <a
            href="#"
            className="no-underline uppercase font-medium"
          >
            kudos
          </a>
        </div>
        <div className="menu flex-1 flex justify-center">
          <p className="no-underline uppercase font-medium">
            Menu
          </p>
        </div>
        <div className="shop flex-1 flex justify-end gap-8">
          <a
            href="#"
            className="no-underline uppercase font-medium"
          >
            Shop
          </a>
          <a
            href="#"
            className="no-underline uppercase font-medium"
          >
            Cart (0)
          </a>
        </div>
      </nav>
      <div className="hero w-screen h-screen overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-[2]"
        />
      </div>
      <div
        className="hero-copy absolute top-1/3 left-1/2 -translate-50 uppercase"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        }}
      >
        <h1 className="text-white leading-none">
          {title}
        </h1>
      </div>
      <div
        className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1000] overlay bg-white"
      >
        <div className="images w-5/12">
          <div className="relative h-[550px] img-holder">
            <div
              className="relative w-4/5 h-full mx-auto z-20"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
              }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover absolute top-0 -left-[110%]"
              />
            </div>
          </div>
          <div
            className="relative my-4 text"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
            <div
              className="counter text-black text-[120px] text-center uppercase leading-none"
            >
              <CountUp
                start={0}
                end={100}
                duration={5}
                suffix="%"
                delay={0.5}
                onEnd={() => animateText()}
              />
            </div>
            <div
              className="logo absolute top-0 left-1/2 -translate-x-1/2"
            >
              <p className="leading-none text-[120px] text-center uppercase">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;