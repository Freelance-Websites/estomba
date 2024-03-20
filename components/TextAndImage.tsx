import { GeistMono } from 'geist/font/mono';
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ReactMarkdown from 'react-markdown';

import styles from './TextAndImage.module.css';

interface TextAndImage {
  images: string[];
  number?: string;
  subtitle?: string;
  text?: string;
  proportion?: string;
  align?: string;
}

const TextAndImage = ({
  images,
  number,
  subtitle,
  text,
  proportion,
  align
}: TextAndImage) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  console.log(text)

  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-x-8 px-4 px-8 lg:px-0"
      data-scroll-section
    >
      {text &&
        <div
          className={`
            col-span-full md:col-span-4
            flex flex-col
            ${subtitle ? 'justify-between' : 'justify-end'}
            ${align === 'left' && `md:col-start-7 lg:col-start-9`}
          `}
          data-scroll
          data-scroll-speed="0.5"
        >
          {subtitle &&
            <div
              className="flex items-baseline gap-8 md:gap-24 mb-4 md:mb-6 lg:mb-0"
            >
              <span
                className={`${GeistMono.className} text-black font-semibold text-xs`}
              >
                [0{number}]
              </span>
              <h2
                className="font-medium text-xl text-black"
              >
                {subtitle}
              </h2>
            </div>
          }
          <div
            className={`text-black text-base grid gap-2 md:gap-4 ${styles.RichText}`}
          >
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      }
      <div
        className={`
          ${proportion === 'vertical' && images.length <= 1 || proportion === 'square' ? 'col-span-full md:col-span-4 lg:col-span-6'
          : proportion === 'vertical' && images.length > 1 ? 'col-span-full md:col-span-4 lg:col-span-4'
          // Horizontal proportion
          : 'col-span-full lg:col-span-10 lg:col-start-2'}
          ${align === 'right' ? `lg:col-start-7` : 'md:row-start-1'}
        `}
        ref={ref}
      >
        {images.map((image, index) =>
          <Image
            src={image}
            alt={subtitle || "Estomba"}
            className={`
              transform w-full h-full transition ease-in-out duration-500
              ${align === 'right' && !inView ? 'translate-x-full opacity-0'
                : align === 'left' && !inView ? '-translate-x-full opacity-0'
                : 'translate-x-0 opacity-1'
              }
            `}
            width={1200}
            height={800}
            quality={80}
            key={index}
          />
        )}
      </div>
    </section>
  )
}

export default TextAndImage;