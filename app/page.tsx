"use client";

import { useEffect } from 'react';
//@ts-ignore
import { attributes } from '@/content/index.md';

import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Subtitle from '@/components/Subtitle';
import Text from '@/components/Text';
import BoxedImage from '@/components/BoxedImage';
import Phrase from '@/components/Phrase';

interface Section {
  type: string;
  image?: string;
  title?: string;
  text?: string;
  number?: string;
  subtitle: string;
  textLocation?: string;
  alt?: string;
  content?: [];
}

export default function Home() {
  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      let scroll = new locomotiveModule.default({
          //@ts-ignore
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
    className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-8 md:gap-y-16 lg:gap-y-24 xl:gap-y-32 bg-white"
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
            case 'subtitle':
              return (
              <Subtitle
                key={`${index}`}
                number={section.number || "1"}
                subtitle={section.subtitle}
                text={section.text}
                textLocation={section.textLocation}
              />
            )
            case 'text':
              return (
              <Text
                key={`${index}`}
                content={section.content || []}
              />
            )
            case 'boxedImage':
              return (
              <BoxedImage
                key={`${index}`}
                image={section.image || ""}
              />
            )
            case 'phrase':
              return (
              <Phrase
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
