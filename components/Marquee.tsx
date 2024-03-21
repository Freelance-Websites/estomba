import MarqueeText from "react-marquee-text";
import './Marquee.css';

interface MarqueeProps {
  text: string;
  scrollDirection: string;
}

const Marquee = ({ text, scrollDirection }: MarqueeProps) => {
  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 px-4 px-8 lg:px-0 w-screen"
      style={{
        marginLeft: 'calc(50% - 50vw)'
      }}
      data-scroll-section
    >
      <div
        className="text-black text-4xl md:text-7xl lg:text-8xl xl:text-[19vw] font-light"
      >
        <MarqueeText
          duration={5}
          direction={scrollDirection === 'down' ? "right" : 'left'}
        >
          {text}
        </MarqueeText>
      </div>
    </section>
  )
}

export default Marquee;