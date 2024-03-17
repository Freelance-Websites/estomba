interface Text {
  text: string;
}

const Text = ({ text }: Text) => {
  return (
    <section
      className="col-span-full container mx-auto px-4 md:px-8"
      data-scroll-section
    >
      <p
        className="text-black text-xl md:text-3xl lg:text-4xl mb-6"
        data-scroll
        data-scroll-speed="0.5"
      >
        {text}
      </p>
    </section>
  )
}

export default Text;