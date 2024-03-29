import { GeistMono } from "geist/font/mono";
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
    threshold: 0.25,
  });

  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-6 lg:gap-y-0 gap-x-8 px-4 px-8 lg:px-0"
      data-scroll-section
    >
      {text &&
        <div
          className={`
            col-span-full md:col-span-4
            flex flex-col
            ${!subtitle && text
              ? 'justify-end'
              : subtitle && text && images.length > 1 ? 'justify-start'
              : 'justify-between'
            }
            ${align === 'left' && `lg:col-start-7 lg:col-start-9`}
          `}
        >
          {subtitle &&
            <div
              className="flex items-baseline gap-8 md:gap-24 mb-6 md:mb-8 lg:mb-12"
              data-scroll
              data-scroll-speed="0.5"
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
            className={`
              text-black text-base grid gap-2 md:gap-4
              ${subtitle && images.length > 1 && 'max-w-[230px] md:ml-32 mt-4 md:mt-6'}
              ${styles.RichText}
            `}
          >
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      }
      {images.map((image, index) =>
        <div
          className={`
            ${proportion === 'vertical' && images.length <= 1 || proportion === 'square' ? 'col-span-full md:col-span-4 lg:col-span-6'
            : proportion === 'vertical' && images.length > 1 ? 'col-span-full md:col-span-4'
            // Horizontal proportion
            : 'col-span-full lg:col-span-8'}
            ${align === 'right' && images.length <= 1 ? `lg:col-start-7` : images.length > 1 ? '' : 'md:row-start-1'}
          `}
          ref={ref}
          key={index}
        >
          <img
            src={image}
            alt={subtitle || "Estomba"}
            className={`
              transform w-full h-full transition ease-in-out duration-500
              ${align === 'right' && !inView ? 'translate-x-full opacity-0'
                : align === 'left' && !inView ? '-translate-x-full opacity-0'
                : 'translate-x-0 opacity-1'
              }
            `}
            key={index}
          />
        </div>
      )}
    </section>
  )
}

export default TextAndImage;