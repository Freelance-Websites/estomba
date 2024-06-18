import { GeistSans } from 'geist/font/sans';

import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${GeistSans.className} overflow-x-hidden`}
    >
      <head>
        <title>Estomba</title>
        <meta name="description" content="Una propuesta de inversión, que combina un edificio de vivienda de pocas unidades en armonía con un barrio de baja densidad, donde predominan las casas." />

        <meta itemprop="name" content="Estomba" />
        <meta itemprop="description" content="Una propuesta de inversión, que combina un edificio de vivienda de pocas unidades en armonía con un barrio de baja densidad, donde predominan las casas." />
        <meta itemprop="image" content="https://estomba.com.ar/images/grid-3.jpg" />

        <meta property="og:url" content="https://estomba.com.ar" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Estomba" />
        <meta property="og:description" content="Una propuesta de inversión, que combina un edificio de vivienda de pocas unidades en armonía con un barrio de baja densidad, donde predominan las casas." />
        <meta property="og:image" content="https://estomba.com.ar/images/grid-3.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estomba" />
        <meta name="twitter:description" content="Una propuesta de inversión, que combina un edificio de vivienda de pocas unidades en armonía con un barrio de baja densidad, donde predominan las casas." />
        <meta name="twitter:image" content="https://estomba.com.ar/images/grid-3.jpg" />
      </head>
      <body className="antialiased selection:bg-black selection:text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
