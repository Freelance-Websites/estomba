"use client";

import { useState, useEffect } from 'react';

import { attributes } from '@/content/index.md';

import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Title from '@/components/Title';
import Subtitle from '@/components/Subtitle';
import Text from '@/components/Text';
import Phrase from '@/components/Phrase';
import Marquee from '@/components/Marquee';
import Stats from '@/components/Stats';
import BoxedImage from '@/components/BoxedImage';
import TextAndImage from '@/components/TextAndImage';
import ImageGrid from '@/components/ImageGrid';
import Infographic from '@/components/Infographic';
import Map from '@/components/Map';

interface Section {
  stats: never[];
  type: string;
  image?: string;
  title?: string;
  text?: string;
  number?: string;
  subtitle: string;
  textLocation?: string;
  alt?: string;
  proportion?: string;
  align?: string;
  content?: [];
  interestPoints?: [];
  images?: string[];
}

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const scrollContainer = document.querySelector("[data-scroll-container]");
      if (scrollContainer instanceof HTMLElement) {
        let scroll = new locomotiveModule.default({
            el: scrollContainer,
            smooth: true,
            // resetNativeScroll: true,
            getDirection: true,
         });
       
        setTimeout(function () {
          scroll.init();
        }, 400);

        scroll.on('scroll', (instance) => {
          //@ts-ignore
          setScrollDirection(instance.direction);
        });

        return () => {
          if (scroll) scroll.destroy();
        }
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
            case 'textAndImage':
              return (
              <TextAndImage
                key={`${index}`}
                images={section.image ? [section.image].flat() : []}
                number={section.number}
                subtitle={section.subtitle}
                text={section.text}
                proportion={section.proportion}
                align={section.align}
                />
            )
            case 'stats':
              return (
              <Stats
                key={`${index}`}
                stats={section.stats} 
              />
            )
            case 'imageGrid':
              return (
              <ImageGrid
                key={`${index}`}
                content={section.content || []} 
              />
            )
            case 'infographic':
              return (
              <Infographic
                key={`${index}`}
                content={section.content || []} 
                image={section.image || ""} 
              />
            )
            case 'title':
              return (
              <Title
                key={`${index}`}
                title={section.title || ""} 
              />
            )
            case 'map':
              return (
              <Map
                key={`${index}`}
                interestPoints={section.interestPoints || []}
                content={section.content || []}
              />
            )
            case 'marquee':
              return (
                <Marquee
                  key={`${index}`}
                  text={section.text || ""}
                  scrollDirection={scrollDirection}
                />
              )
        default:
          break;
      }
    })}
   </main>
  );
}
