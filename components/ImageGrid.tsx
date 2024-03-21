import Image from "next/image";
import { useInView } from "react-intersection-observer";

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
      {content.map((item: ImageGrid, index: Number) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.25,
        });

        return (
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
            ref={ref}
          >
            <Image
              src={item.image}
              alt={"Estomba"}
              className={`
                transform w-full h-full transition ease-in-out duration-500
                ${item.proportion === 'vertical' && !inView ? 'translate-x-full opacity-0'
                  : item.proportion === 'square' && !inView ? '-translate-x-full opacity-0'
                  : item.proportion === 'horizontal' && !inView ? 'opacity-0'
                  : 'translate-x-0 opacity-1'
                }
              `}
              width={1200}
              height={800}
              quality={80}
            />
          </div>
        )
      })}
    </section>
  )
}

export default ImageGrid;