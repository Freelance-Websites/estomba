import { GeistMono } from 'geist/font/mono';

interface Subtitle {
  number?: string;
  subtitle: string;
  text?: string;
  textLocation?: string;
}

const Subtitle = ({ number, subtitle, text, textLocation }: Subtitle) => {
  return (
    <section
      className={`
        col-span-full lg:col-span-10 lg:col-start-2 px-4 px-8 lg:px-0 flex
        ${textLocation === 'below' && 'flex-col'}
      `}
      data-scroll-section
    >
      <div
        className="flex flex-1 items-baseline gap-8 md:gap-24"
        data-scroll
        data-scroll-speed="0.5"
      >
        <span
          className={`${GeistMono.className} text-black font-semibold text-xs`}
        >
          [0{number}]
        </span>
        <h2
          className="font-medium text-xl text-black"
        >
          {subtitle}
        </h2>
      </div>
      {text &&
        <p className="text-black md:max-w-xs">
          {text}
        </p>
      }
    </section>
  )
}

export default Subtitle;