import { useInView } from "react-intersection-observer";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 px-8 lg:px-0"
      data-scroll-section
      >
      <h3
        className="flex text-black text-[19vw] font-light leading-none"
      >
        {title.split('').map((char, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.25,
          });
          return (
            <span
              key={index}
              ref={ref}
              className={`
                transform w-full h-full transition ease-in-out duration-500 block
                ${!inView ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-1'}
              `}
              style={{
                transitionDelay: (index + 1) * 100 + 'ms',
              }}
            >
              {char}
            </span>
          )
        })}
      </h3>
    </section>
  )
}

export default Title;