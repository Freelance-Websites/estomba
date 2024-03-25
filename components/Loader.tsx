"use client";

import { useState } from 'react';
import { GeistMono } from 'geist/font/mono';
import { gsap } from "gsap";
import CountUp from 'react-countup';

const Loader = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  const startAnimation = () => {
    setIsLogoVisible(true);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
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
  
      gsap.to(".hero div", {
        scale: 1,
        ease: "power3.inOut",
        duration: 2,
        delay: 3.5,
      });
  
      gsap.to(".hero-copy h1 span", {
        opacity: "1",
        ease: "power3.inOut",
        duration: 2,
        delay: 4,
      });
  
      gsap.to("header", {
        top: "0",
        ease: "power3.inOut",
        duration: 2,
        delay: 4,
      });
      
      gsap.to(".overlay", {
        display: 'none',
        duration: 0.1,
        delay: 6,
        onComplete: () => {
          document.body.style.overflow = 'initial';
          document.documentElement.style.overflow = 'initial';
        }
      });
    }, 300);
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1000] overlay bg-white"
    >
      <div className="w-full">
        <div
          className="relative my-4 text"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        >
          <div
            className={`counter text-black text-4xl md:text-7xl lg:text-9xl text-center font-light leading-none ${GeistMono.className}`}
          >
            <CountUp
              start={0}
              end={100}
              duration={Math.floor(Math.random() * (6 - 4 + 1) + 4)}
              suffix="%"
              delay={Math.random()}
              onEnd={() => animateText()}
              onStart={() => startAnimation()}
            />
          </div>
          <div
            className={`logo absolute top-0 left-1/2 -translate-x-1/2 text-black ${isLogoVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="leading-none text-4xl md:text-7xl lg:text-9xl text-center font-light">estomba</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader;