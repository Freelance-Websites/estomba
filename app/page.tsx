import { attributes } from '@/content/index.md';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

interface Section {
  type: string;
  image?: string;
  title?: string;
}

export default function Home() {
  return (
   <main
    className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12"
   >
    <Header />
    {/* <Loader /> */}
    {attributes.sections.map((section: Section, index: Number) => {
      switch(section.type) {
        case 'hero':
          return (
            <Hero
              image={section.image || ""}
              title={section.title || "estomba"}
              key={`${index}`}
            />
          )
        default:
          break;
      }
    })}
   </main>
  );
}
