"use client";

import { gsap } from "gsap";
import CountUp from 'react-countup';

const Loader = () => {
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

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1000] overlay bg-white"
    >
      <div className="images w-5/12">
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
              duration={Math.floor(Math.random() * (6 - 4 + 1) + 4)}
              suffix="%"
              delay={Math.random()}
              onEnd={() => animateText()}
            />
          </div>
          <div
            className="logo absolute top-0 left-1/2 -translate-x-1/2"
          >
            <p className="leading-none text-[120px] text-center uppercase">estomba</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader;