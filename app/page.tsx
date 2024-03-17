"use client";

import { useEffect } from 'react';

import { attributes } from '@/content/index.md';

import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Text from '@/components/Text';

interface Section {
  type: string;
  image?: string;
  title?: string;
  text?: string;
}

export default function Home() {
  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      let scroll = new locomotiveModule.default({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
          smoothMobile: true,
          resetNativeScroll: true,
          inertia: 0.75,
       });
       
       setTimeout(function () {
          scroll.init();
        }, 400);

        return () => {
          if (scroll) scroll.destroy();
        }
    });
  }, []);

  return (
   <main
    className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 bg-white"
    data-scroll-container
   >
    <Header />
    {/* <Loader /> */}
    {attributes.sections.map((section: Section, index: Number) => {
      switch(section.type) {
        case 'hero':
          return (
            <Hero
              image={section.image || ""}
              title={section.title || "estomba"}
              key={`${index}`}
              />
            )
            case 'text':
              return (
              <Text
                key={`${index}`}
                text={section.text || ""}
              />
          )
        default:
          break;
      }
    })}
   </main>
  );
}
