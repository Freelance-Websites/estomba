import { attributes } from '@/content/index.md';
import Hero from '@/components/Hero';

interface Section {
  type: string;
  image?: string;
  title?: string;
}

export default function Home() {
  return (
   <main>
    {attributes.sections.map((section: Section, index: Number) => {
      switch(section.type) {
        case 'hero':
          return (
            <Hero
              image={section.image || ""}
              title={section.title || "estomba"}
            />
          )
        default:
          break;
      }
    })}
   </main>
  );
}
