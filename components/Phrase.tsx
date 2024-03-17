interface Phrase {
  text: string;
}

const Phrase = ({ text }: Phrase) => {
  return (
    <section
      className="col-span-full container mx-auto px-4 md:px-8"
      data-scroll-section
    >
      <p
        className="text-black text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[6vw] font-light"
        data-scroll
        data-scroll-speed="2"
      >
        {text}
      </p>
    </section>
  )
}

export default Phrase;