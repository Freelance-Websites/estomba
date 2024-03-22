import ReactCompareImage from 'react-compare-image';
import Subtitle from './Subtitle';

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
      className="col-span-full lg:col-span-10 lg:col-start-2 px-8 lg:px-0"
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
        <div className='mt-4 md:mt-6 lg:mt-8'>
          <Subtitle
            number={number}
            subtitle={subtitle}
            text={text}
          />
        </div>
      }
    </section>
  )
}

export default VirtualStaging;