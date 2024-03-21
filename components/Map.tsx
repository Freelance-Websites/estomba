import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

interface InterestPoint {
  title: string;
  location: string;
  coordinates: string;
  type: string;
}

interface Content {
  title: string;
  text: string; 
}

interface MapProps {
  interestPoints: Array<InterestPoint>,
  content: Array<Content>
}

const Map = ({ interestPoints, content }: MapProps) => {
  const styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || ''
  })

  const [map, setMap] = useState(null)

  const center = {
    lat: -34.58123860717787,
    lng: -58.46498328952765
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <section
      className="col-span-full"
      data-scroll-section
    >
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ height: "70vh", width: "100%", position: 'relative' }}
            center={center}
            zoom={16}
            onUnmount={onUnmount}
            options={{styles}}
          >
            {interestPoints.map((point: InterestPoint, index: Number) =>
              <Marker
                key={`${index}`}
                label={{
                  text: point.title,
                  className: `
                    text-black text-sm font-sans absolute
                    ${point.location === 'top'
                      ? 'top-4 -left-12'
                      : point.location === 'left'
                      ? 'left-4 top-10'
                      : point.location === 'right'
                      ? 'right-4 top-10'
                      : 'bottom-4 -left-12'
                    }
                  `,
                }}
                position={{
                  lat: Number(point.coordinates.split(",")[0]),
                  lng: Number(point.coordinates.split(",")[1]),
                }}
                icon={{
                  url: point.type === 'point' ? '/images/map/point.svg'
                    : point.type === 'square' ? '/images/map/park.svg'
                    : point.type === 'building' ? '/images/map/building.svg'
                    : '/images/map/transport.svg',
                }}
              />
            )}
          </GoogleMap>
        )}
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 mt-6 md:mt-8 lg:mt-12'>
          {content.map((item: Content, index: Number) =>
            <li
              key={`${index}`}
              className='text-black text-sm xl:text-base font-sans'
            >
              <h4 className="font-medium mb-1">[{item.title}]</h4>
              <ReactMarkdown>{item.text}</ReactMarkdown>
            </li>
          )}
          <li
            className='text-black text-sm xl:text-base font-sans'
          >
            <h4 className="font-medium mb-1">[referencias]</h4>
            <ol className="md:pt-0 lg:pt-5">
              <li className='flex gap-2 items-center mb-1 lg:mb-0'>
                <Image
                  src={'/images/map/point.svg'}
                  alt="Punto de interés"
                  width={18}
                  height={18}
                />
                <span>Puntos de inter&eacute;s.</span>
              </li>
              <li className='flex gap-2 items-center mb-1 lg:mb-0'>
                <Image
                  src={'/images/map/park.svg'}
                  alt="Plazas"
                  width={18}
                  height={18}
                />
                <span>Plazas.</span>
              </li>
              <li className='flex gap-2 items-center'>
                <Image
                  src={'/images/map/transport.svg'}
                  alt="Transporte"
                  width={18}
                  height={18}
                />
                <span>Transporte.</span>
              </li>
            </ol>
          </li>
        </ul>
    </section>
  )
}

export default Map;