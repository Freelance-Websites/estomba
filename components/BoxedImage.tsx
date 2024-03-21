import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface BoxedImage {
  image: string;
  alt?: string;
}

const BoxedImage = ({ image, alt }: BoxedImage) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section
      className="col-span-full lg:col-span-8 lg:col-start-3 relative"
      ref={ref}
      data-scroll-section
    >
      <Image
        src={image}
        alt={alt || "Estomba"}
        className={`${inView ? 'opacity-1' : 'opacity-0'} transition-opacity delay-200 duration-500 ease-in-out w-full h-full`}
        width={1200}
        height={800}
        quality={80}
        data-scroll
        data-scroll-speed="1"
      />
    </section>
  )
}

export default BoxedImage;