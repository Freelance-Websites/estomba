import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { GeistMono } from "geist/font/mono";

interface StatsProps {
   stats: Array<Stat>;
}

interface Stat {
  number: string;
  unit?: string;
  description?: string;
}

const Stats = ({ stats }: StatsProps) => {
  const dontPurgeThese = ['lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-5', 'lg:col-span-6', 'lg:col-span-10']

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });
  
  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 px-4 md:px-0"
      data-scroll-section
    >
      <ul
        className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 gap-4 md:gap-8 lg:gap-12"
        ref={ref}
      >
        {stats.map((stat: Stat, index: Number) => (
          <li
            key={`${index}`}
            className={`
              col-span-full lg:col-span-${10 / stats.length}
              flex gap-4
            `}
          >
            <CountUp
              start={inView ? 0 : 0}
              end={inView ? Number(stat.number) : 0}
              duration={Math.floor(Math.random() * (6 - 4 + 1) + 4)}
              delay={Math.random()}
              decimal={"."}
              decimals={2}
              className={`text-black text-7xl md:text-9xl text-center font-extralight leading-none ${GeistMono.className}`}
            />
            <div
              className="flex flex-col"
            >
              <span className={`text-black text-xs font-semibold ${GeistMono.className}`}>
                [{stat.unit}]
              </span>
              <span className='text-black text-sm'>
                {stat.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Stats;