interface Phrase {
  text: string;
}

const Phrase = ({ text }: Phrase) => {
  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 px-4 px-8 lg:px-0"
      data-scroll-section
    >
      <p
        className="text-black text-4xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[6vw] font-light"
        data-scroll
        data-scroll-speed="1"
      >
        {text}
      </p>
    </section>
  )
}

export default Phrase;