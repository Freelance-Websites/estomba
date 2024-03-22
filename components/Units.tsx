import { GeistMono } from "geist/font/mono";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Unit {
  available: boolean;
  uf: number;
  description: string;
  location: string;
  surfaceOne?: string;
  surfaceTwo?: string;
  surfaceThree?: string;
}

import { Dispatch } from 'react';

interface UnitProps {
  content: Array<Unit>;
  setSelectedUnit: Dispatch<React.SetStateAction<string>>;
};

const Units = ({ content, setSelectedUnit }: UnitProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const setSelectedUnitAndScrollDown = (unit: Unit) => {
    setSelectedUnit(unit.uf.toString());

    const contactLink = document.querySelector('a[href="#contacto"]') as HTMLAnchorElement;
    if (contactLink) contactLink.click();
  };

  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 px-8 lg:px-0"
      data-scroll-section
      ref={ref}
    >
      <ul
        className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}
      >
        {content.map((unit: Unit, index: Number) => {
          return (
            <li
              key={`${index}`}
              className={`
                border-t border-t-[#D9D9D9]
                py-4 md:py-6
                grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8
                relative
                ${unit.available ? 'opacity-100' : 'opacity-40'}
              `}
            >
              <CountUp
                className={`${GeistMono.className} col-span-full md:col-span-2 lg:col-span-3 font-extralight text-black text-7xl lg:text-8xl xl:text-9xl`}
                end={unit.uf || 0}
                duration={2}
              />
              <div
                className="col-span-full md:col-span-2 lg:col-span-2 flex flex-col justify-between"
              >
                <p className="text-black text-sm">
                  {unit.description}
                </p>
                <p className="text-black text-sm">
                  {unit.location}
                </p>
              </div>
              <div
                className="col-span-full md:col-span-2 lg:col-span-2 flex flex-col justify-between"
              >
                {unit.surfaceOne && (
                  <div className="text-black text-sm">
                    <p className={`font-medium ${GeistMono.className}`}>
                      [{unit.surfaceOne} m<sup>2</sup>]
                    </p>
                    <p>
                      Superficie cubierta
                    </p>
                  </div>
                )}
                {unit.surfaceTwo && (
                  <div className="text-black text-sm mt-2">
                    <p className={`font-medium ${GeistMono.className}`}>
                      [{unit.surfaceTwo} m<sup>2</sup>]
                    </p>
                    <p>
                      Superficie semi-cubierta
                    </p>
                  </div>
                )}
              </div>
              <div
                className="col-span-full md:col-span-2 lg:col-span-2 flex flex-col justify-between"
              >
                {unit.surfaceThree && (
                  <div className="text-black text-sm">
                    <p className={`font-medium ${GeistMono.className}`}>
                      [{unit.surfaceThree} m<sup>2</sup>]
                    </p>
                    <p>
                      Superficie descubierta
                    </p>
                  </div>
                )}
              </div>
              <div
                className="col-span-full md:col-span-3 lg:col-span-3"
              >
                <button
                  className={`
                    flex items-center justify-center lg:justify-between
                    text-white lg:text-black text-xl md:text-2xl 2xl:text-3xl uppercase w-full
                    bg-black lg:bg-white
                    py-2 lg:py-0
                    rounded-2xl lg:rounded-none
                    ${unit.available ? 'cursor-pointer' : 'cursor-not-allowed'}
                  `}
                  onClick={() => setSelectedUnitAndScrollDown(unit)}
                >
                  <span className="text-left">{unit.available ? 'Consultar' : 'No disponible'}</span>
                  <svg className="absolute right-0 top-6 lg:static transform md:scale-75 2xl:scale-100" fill="none" height="27" viewBox="0 0 28 27" width="28" xmlns="http://www.w3.org/2000/svg">
                    <path d="m27.5091 22.2218-3.7819.0248v-15.67151l-20.29383 20.29381-2.719032-2.719 20.293862-20.29384-15.6468.02472v-3.8066373h22.1477z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Units;