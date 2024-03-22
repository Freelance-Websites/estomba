"use client";

import { useEffect } from "react";
import Image from "next/image";

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
      .map((char: String) => `<span class="relative -z-20 text-current ${element.nodeName === 'H1' ? 'opacity-0' : 'top-[120px]'}">${char}</span>`)
      .join("");
    element.innerHTML = splitText;
  }
}

const Hero = ({ image, title}: Hero) => {
  const isImage = image.endsWith('.jpg') || image.endsWith('.png') || image.endsWith('.avif') || image.endsWith('.webm') || image.endsWith('.gif');

  useEffect(() => {
    splitTextIntoSpans(".logo p");
    splitTextIntoSpans(".hero-copy h1");
  }, []);
  
  return (
    <section
      className="col-span-full"
      data-scroll-section
      id="top"
    >
      <div className="relative hero overflow-hidden">
        <div className="scale-[2] w-screen h-screen">
          {isImage ?
            <Image
              src={image}
              alt={title}
              className="w-full h-full"
              fill={true}
              quality={80}
            />
            :
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={image} />
            </video>
          }
        </div>
      </div>
      <div
        className="hero-copy absolute flex items-center justify-center w-full h-full top-0 text-[24vw] font-light"
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