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
import Units from '@/components/Units';
import Contact from '@/components/Contact';

import BoxedImage from '@/components/BoxedImage';
import TextAndImage from '@/components/TextAndImage';
import ImageGrid from '@/components/ImageGrid';
import Infographic from '@/components/Infographic';
import VirtualStaging from '@/components/VirtualStaging';
import ImageGallery from '@/components/ImageGallery';
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
  firstImage?: string;
  secondImage?: string;
  setAvailableUnits?: () => void;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [availableUnits, setAvailableUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState("");

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const scrollContainer = document.querySelector("[data-scroll-container]");
      if (scrollContainer instanceof HTMLElement) {
        let scroll = new locomotiveModule.default({
            el: scrollContainer,
            smooth: true,
            resetNativeScroll: false,
            getDirection: true,
            smartphone: {
              smooth: true,
            },
         });
       
        setTimeout(function () {
          scroll.init();

          const anchorLinks = document.querySelectorAll('a[href^="#"]');
          
          // Add id to headings for anchor links
          anchorLinks.forEach((link) => {
            const linkText = (link as HTMLAnchorElement).href.split('#')[1];
            const headingElements = document.querySelectorAll(`h1, h2, h3, h4, h5, h6`);
            headingElements.forEach((headingElement) => {
              if (headingElement.getAttribute('data-title')?.includes(linkText)) {
                const parentSection = headingElement.closest('section');
                if (parentSection) {
                  parentSection.id = linkText;
                }
              }
            });
          });
        }, 400);

        scroll.on('scroll', (instance) => {
          //@ts-ignore
          setScrollDirection(instance.direction);
          
          if(instance.delta.y > 900) {
            setIsScrolled(true)
          } else {
            setIsScrolled(false);
          }
        });

        return () => {
          if (scroll) scroll.destroy();
        }
       }
    });

    const units = attributes.sections.filter((section: Section) => section.type === 'units');
    setAvailableUnits(units[0].content.filter((unit: any) => unit.available));
  }, []);

  return (
   <main
    className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-8 md:gap-y-16 lg:gap-y-24 xl:gap-y-32 bg-white"
    data-scroll-container
   >
    <Header
      isScrolled={isScrolled}
    />
    <Loader />
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
            case 'virtualStaging':
              return (
                <VirtualStaging
                  key={`${index}`}
                  firstImage={section.firstImage || ""}
                  secondImage={section.secondImage || ""}
                  number={section.number || "1"}
                  subtitle={section.subtitle}
                  text={section.text}
                  textLocation={section.textLocation}
                />
              )
            case 'imageGallery':
              return (
                <ImageGallery
                  key={`${index}`}
                  content={section.content || []}
                  images={section.content?.map((slide: any) => slide.image) || []}
                  number={section.number || "1"}
                  subtitle={section.subtitle}
                  text={section.text}
                  textLocation={section.textLocation}
                />
              )
            case 'units':
              return (
                <Units
                  key={`${index}`}
                  content={section.content || []}
                  setSelectedUnit={setSelectedUnit}
                />
              )
        default:
          break;
      }
    })}
    <Contact
      availableUnits={availableUnits}
      selectedUnit={selectedUnit}
    />
   </main>
  );
}
