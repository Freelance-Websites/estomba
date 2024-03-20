import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useInView } from "react-intersection-observer";

interface Content {
  text: string;
  title: string;
}

interface InfographicProps {
  content: Array<Content>;
  image: string;
}

const Infographic: React.FC<InfographicProps> = ({ content, image }) => {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-12 gap-x-4 lg:gap-x-8 px-8 lg:px-0 gap-y-6 lg:gap-y-0"
      data-scroll-section
    >
      {content.map((item: Content, index: number) => {
        const itemRef = useRef(null);
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.75,
        });

        const animateDottedLine = (ref: React.RefObject<HTMLDivElement>) => {
          const line = ref.current;
          
          let width = 0;
          const intervalId = setInterval(() => {
            if (line && width < 100) {
              width += 1;
              line.style.width = `${width}%`;
            } else {
              setIsAnimationCompleted(true);
              clearInterval(intervalId);
            }
          }, 10);
        }

        return (
          <div
            key={`${index}`}
            className={`
              relative z-10
              col-span-full lg:col-span-3
              ${index === 0 ? 'lg:row-start-2 xl:row-start-3'
                : index === 1 ? 'lg:row-start-1 xl:row-start-2'
                : index === 2 ? 'lg:row-start-4 xl:row-start-5'
                : 'lg:row-start-3 xl:row-start-4'
              }
              ${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-10'}
            `}
            ref={ref}
          >
            <div
              className={`
                hidden xl:block
                h-auto absolute
                overflow-x-hidden
                transition-all ease-in-out duration-500 
                ${index % 2 === 0 ? 'left-full ml-2' : 'right-full mr-2'}
                ${inView && animateDottedLine(itemRef)}
              `}
              ref={itemRef}
            >
              <svg xmlns="http://www.w3.org/2000/svg">
                <g id="dotted-line" className="dotted-line">
                  <circle cx="10" cy="10" r="1"></circle>
                  <circle cx="20" cy="10" r="1"></circle>
                  <circle cx="30" cy="10" r="1"></circle>
                  <circle cx="40" cy="10" r="1"></circle>
                  <circle cx="50" cy="10" r="1"></circle>
                  <circle cx="60" cy="10" r="1"></circle>
                  <circle cx="70" cy="10" r="1"></circle>
                  <circle cx="80" cy="10" r="1"></circle>
                  <circle cx="90" cy="10" r="1"></circle>
                  <circle cx="100" cy="10" r="1"></circle>
                  <circle cx="110" cy="10" r="1"></circle>
                  <circle cx="120" cy="10" r="1"></circle>
                  <circle cx="130" cy="10" r="1"></circle>
                  <circle cx="140" cy="10" r="1"></circle>
                  <circle cx="150" cy="10" r="1"></circle>
                  <circle cx="160" cy="10" r="1"></circle>
                  <circle cx="170" cy="10" r="1"></circle>
                  <circle cx="180" cy="10" r="1"></circle>
                  <circle cx="190" cy="10" r="1"></circle>
                  <circle cx="200" cy="10" r="1"></circle>
                  <circle cx="210" cy="10" r="1"></circle>
                  <circle cx="220" cy="10" r="1"></circle>
                  <circle cx="230" cy="10" r="1"></circle>
                  <circle cx="240" cy="10" r="1"></circle>
                  <circle cx="250" cy="10" r="1"></circle>
                  <circle cx="260" cy="10" r="1"></circle>
                  <circle cx="270" cy="10" r="1"></circle>
                  <circle cx="280" cy="10" r="1"></circle>
                  <circle cx="290" cy="10" r="1"></circle>
                  <circle cx="300" cy="10" r="1"></circle>
                </g>
              </svg>
            </div>
            <h3
              className={`
                text-black font-medium
                transition-opacity ease-in-out duration-500
                ${inView && isAnimationCompleted ? 'opacity-1' : 'opacity-0'}
              `}
            >
              {item.title}
            </h3>
            <p
              className={`
                text-black
                transition-opacity ease-in-out duration-500
                ${inView && isAnimationCompleted ? 'opacity-1' : 'opacity-0'}
              `}
            >
              {item.text}
            </p>
          </div>
        )
      }
      )}
      <div
        className='col-span-full lg:col-span-6 lg:col-start-4 lg:transform lg:absolute lg:left-1/2 lg:-translate-x-1/2 xl:translate-x-0 xl:left-0 order-first lg:order-none'
        ref={ref}
      >
        <Image
          src={image}
          alt="Building image"
          width={1200}
          height={800}
          quality={80}
          className={`
            w-full md:w-96 md:mx-auto lg:w-full h-full
            transition-opacity ease-in-out duration-500
            ${inView ? 'opacity-1' : 'opacity-0'}
          `}
        />
      </div>
    </section>
  );
};

export default Infographic;