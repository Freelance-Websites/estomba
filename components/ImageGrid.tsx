import Image from "next/image";

import styles from './ScrollAnimations.module.css';

interface GridProps {
  content: Array<ImageGrid>;
}

interface ImageGrid {
  image: string;
  proportion?: string;
}

const ImageGrid = ({ content }: GridProps) => {
  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 relative grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-16 lg:gap-y-24"
      data-scroll-section
    >
      {content.map((item: ImageGrid, index: Number) => (
        <div
          key={`${index}`}
          className={`
            ${item.proportion === 'vertical'
              ? 'col-span-full md:col-span-4 lg:col-span-6 md:col-start-5 lg:col-start-7'
              : item.proportion === 'square'
              ? 'col-span-full md:col-span-4 lg:col-span-6'
              : 'col-span-full md:col-span-10 md:col-start-2'
            }
          `}
        >
          <Image
            data-scroll
            data-scroll-speed="1"
            src={item.image}
            alt={"Estomba"}
            className={`${styles.ImageOpacity} w-full h-full`}
            width={1200}
            height={800}
            quality={80}
          />
        </div>
      ))}
    </section>
  )
}

export default ImageGrid;