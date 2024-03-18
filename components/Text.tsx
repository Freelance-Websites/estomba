import { GeistMono } from 'geist/font/mono';

interface Text {
  content: [];
}

interface Item {
  subtitle?: string;
  number?: string;
  text: string;
}

const Text = ({ content }: Text) => {
  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 px-4 px-8 lg:px-0"
      data-scroll-section
    >
      {content.map((item: Item, index) =>
        <div key={index}>
          {item.subtitle &&
            <div
              className="flex items-baseline gap-8 md:gap-24 mb-6 md:mb-8 lg:mb-12"
              data-scroll
              data-scroll-speed="0.5"
            >
              <span
                className={`${GeistMono.className} text-black font-semibold text-xs`}
              >
                [0{item.number}]
              </span>
              <h2
                className="font-medium text-xl text-black"
              >
                {item.subtitle}
              </h2>
            </div>
          }
          <p
            className="text-black text-xl md:text-3xl lg:text-4xl mb-6"
            data-scroll
            data-scroll-speed="0.5"
          >
            {item.text}
          </p>
        </div>
      )}
    </section>
  )
}

export default Text;