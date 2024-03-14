"use client";

import { useEffect } from "react";

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

const Hero = ({ image, title}: Hero) => {
  useEffect(() => {
    splitTextIntoSpans(".logo p");
    splitTextIntoSpans(".hero-copy h1");
  }, []);
  
  return (
    <section>
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
    </section>
  )
}

export default Hero;