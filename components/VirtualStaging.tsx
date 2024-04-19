import { GeistMono } from 'geist/font/mono';
import ReactCompareImage from 'react-compare-image';

interface VirtualStagingProps {
  firstImage: string;
  secondImage: string;
  number?: string;
  subtitle?: string;
  text?: string;
  textLocation?: string;
}

const VirtualStaging = ({ firstImage, secondImage, number, subtitle, text, textLocation }: VirtualStagingProps) => {
  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 px-8 lg:px-0 min-h-screen"
      data-scroll-section
    >
      <ReactCompareImage
        leftImage={firstImage}
        leftImageAlt="Estomba"
        rightImageAlt="Estomba"
        rightImage={secondImage}
        sliderLineColor="#f9f9f9"
        sliderPositionPercentage={0.25}
      />
      {subtitle &&
        <div
          className="flex items-baseline gap-8 md:gap-24 my-6 md:my-8 lg:my-12"
          data-scroll
          data-scroll-speed="0.5"
        >
          <span
            className={`${GeistMono.className} text-black font-semibold text-xs`}
          >
            [0{number}]
          </span>
          <h2
            className="font-medium flex-1 text-xl text-black"
          >
            {subtitle}
          </h2>
          {text &&
            <p className="text-black md:max-w-xs">
              {text}
            </p>
          }
        </div>
      }
    </section>
  )
}

export default VirtualStaging;