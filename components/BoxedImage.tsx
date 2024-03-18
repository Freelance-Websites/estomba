import Image from "next/image";

interface BoxedImage {
  image: string;
  alt?: string;
}

const BoxedImage = ({ image, alt }: BoxedImage) => {
  return (
    <section
      className="col-span-full lg:col-span-8 lg:col-start-3 relative"
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