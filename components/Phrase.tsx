import { useInView } from "react-intersection-observer";

interface Phrase {
  text: string;
}

const Phrase = ({ text }: Phrase) => {

  // Split the sentence into 3 parts
  const splitSentence = (sentence: string) => {
    const words = sentence.split(' ');
    const length = words.length;
    const partLength = Math.ceil(length / 3);

    const parts = [];
    for (let i = 0; i < 3; i++) {
        const part = words.slice(i * partLength, (i + 1) * partLength).join(' ');
        parts.push(part);
    }

    return parts;
  }
  const splittedText = splitSentence(text);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 px-4 px-8 lg:px-0"
      data-scroll-section
      ref={ref}
    >
      {splittedText.map((part, index) =>
        <p
          className={`
            text-black text-4xl md:text-7xl lg:text-8xl xl:text-9xl xl:tracking-tight 2xl:text-[6vw] font-light
            transform transition ease-in-out duration-500 delay-200
            ${index === 1 && !inView ? 'translate-x-full opacity-0'
              : index === 0 && !inView || index === 2 && !inView ? '-translate-x-full opacity-0'
              : 'translate-x-0 opacity-1'
            }
          `}
          key={index}
        >
          {part}
        </p>
      )}
    </section>
  )
}

export default Phrase;