import Image from "next/image";

interface BoxedImage {
  image: string;
  alt?: string;
}

const BoxedImage = ({ image, alt }: BoxedImage) => {
  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 container mx-auto px-4 md:px-8 pt-6 md:pt-12 lg:pt-24 pb-16 md:pb-24 lg:pb-48 relative"
      data-scroll-section
    >
      <Image
        data-scroll
        data-scroll-speed="1"
        src={image}
        alt={alt || "Estomba"}
        className="w-full h-full"
        width={1200}
        height={800}
        quality={80}
      />
    </section>
  )
}

export default BoxedImage;