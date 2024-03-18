import { GeistMono } from 'geist/font/mono';
import Image from "next/image";

import styles from './ScrollAnimations.module.css';

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
  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-x-8"
      data-scroll-section
    >
      {text &&
        <div
          className={`
            col-span-full md:col-span-6 lg:col-span-3
            flex flex-col
            ${subtitle ? 'justify-between' : 'justify-end'}
            ${align === 'left' && `md:col-start-7 lg:col-start-9`}
          `}
          data-scroll
          data-scroll-speed="0.5"
        >
          {subtitle &&
            <div
              className="flex items-baseline gap-8 md:gap-24"
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
          <p
            className="text-black text-base"
          >
            {text}
          </p>
        </div>
      }
      <div
        className={`
          ${proportion === 'vertical' && images.length <= 1 || proportion === 'square' ? 'col-span-full md:col-span-6'
          : proportion === 'vertical' && images.length > 1 ? 'col-span-full lg:col-span-4'
          // Horizontal proportion
          : 'col-span-full lg:col-span-10 lg:col-start-2'}
          ${align === 'right' ? `lg:col-start-7` : 'md:row-start-1'}
        `}
      >
        {images.map((image, index) =>
          <Image
            data-scroll
            data-scroll-speed="0.5"
            src={image}
            alt={subtitle || "Estomba"}
            className={`${styles.ImageOpacity} w-full h-full`}
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