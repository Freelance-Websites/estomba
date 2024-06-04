import { GeistMono } from 'geist/font/mono';
import { useState, useRef, useCallback } from 'react';
import Flickity from 'react-flickity-component';
import LightGallery from 'lightgallery/react';
import ReactMarkdown from 'react-markdown';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

interface ImageGalleryItem {
  image?: string;
  src?: string;
  title: string;
  text: string;
}

interface ImageGalleryProps {
  images: Array<string>;
  content: Array<ImageGalleryItem>;
  subtitle?: string;
  number?: string;
  text?: string;
  textLocation?: string;
}

const ImageGallery = ({ content, subtitle, number, text }: ImageGalleryProps) => {
  // Loop through the content array and replace "image" property with "src"
  const updatedContent = content.map((item: ImageGalleryItem) => {
    return {
      ...item,
      src: item.image || item.src,
    };
  });

  // Use the updated content in the component
  // ...
  // Slider
  const flickityOptions = {
    autoPlay: 7000,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    imagesLoaded: true,
    adaptiveHeight: false,
    pauseAutoPlayOnHover: false,
    lazyLoad: 1,
  };

  // Image gallery stuff
  const lightGallery = useRef(null);
  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance;
    };
  }, []);
  
  // Prev-Next arrow
  const [flktyRef, setFlktyRef] = useState<Flickity | null>(null);
  const prevSlide = () => {
    if (flktyRef) {
      flktyRef.previous();
    }
  }
  const nextSlide = () => {
    if (flktyRef) {
      flktyRef.next();
    }
  }


  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 px-8 lg:px-0 relative min-h-screen"
      data-scroll-section
    >
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
      <LightGallery
        dynamic={true}
        dynamicEl={updatedContent}
        download={false}
        counter={false}
        hideScrollbar={true}
        onInit={onInit}
        mobileSettings={{
          controls: true,
          showCloseIcon: true
        }}
      >
        <Flickity
          className={'carousel overflow-x-hidden'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          flickityRef={c => setFlktyRef(c)}
        >
          {updatedContent && updatedContent.map((slide: ImageGalleryItem, index: Number) => 
            <div
              key={`${index}`}
              className="w-full mx-auto flex flex-col items-center"
            >
              <img
                src={slide.src}
                className="aspect-horizontal object-contain block h-80 lg:h-[680px] w-3/4 cursor-pointer"
                alt={slide.text}
                onClick={() => {
                  if (lightGallery.current) {
                    // @ts-ignore
                    lightGallery.current.openGallery(index);
                  }
                }}
              />
              <div className='text-black self-start text-sm'>
                {slide.title && 
                  <h5 className={`${GeistMono.className} font-medium`}>
                    {slide.title}
                  </h5>
                }
                <ReactMarkdown>
                  {slide.text}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </Flickity>
      </LightGallery>
      {/* Custom prev-next buttons */}
      <button onClick={prevSlide} className="hidden md:block absolute top-1/2 text-black">
        <svg fill="none" height="15" viewBox="0 0 16 15" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6.9581 14.2758 1.34233-1.3274-4.66087-4.66085h11.70814v-1.93892h-11.70814l4.66087-4.65341-1.34233-1.334868-6.95774523 6.957738z" fill="currentColor"/></svg>
      </button>
      <button onClick={nextSlide} className="hidden md:block absolute top-1/2 right-8 text-black">
        <svg fill="currentColor" height="15" viewBox="0 0 16 15" width="16" xmlns="http://www.w3.org/2000/svg" className="currentColor"><path d="m9.01456 14.2758-1.34233-1.3274 4.66087-4.66085h-11.7081v-1.93892h11.7081l-4.66087-4.65341 1.34233-1.334868 6.95774 6.957738z" /></svg>
      </button>
    </section>
  )
}

export default ImageGallery;