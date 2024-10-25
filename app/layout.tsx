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

        <meta property="og:url" content="https://estomba.com.ar" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Estomba" />
        <meta property="og:description" content="Una propuesta de inversión, que combina un edificio de vivienda de pocas unidades en armonía con un barrio de baja densidad, donde predominan las casas." />
        <meta property="og:image" content="https://estomba.com.ar/images/grid-3.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estomba" />
        <meta name="twitter:description" content="Una propuesta de inversión, que combina un edificio de vivienda de pocas unidades en armonía con un barrio de baja densidad, donde predominan las casas." />
        <meta name="twitter:image" content="https://estomba.com.ar/images/grid-3.jpg" />
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1018163696775949');
        fbq('track', 'PageView');` }} />
      </head>
      <body className="antialiased selection:bg-black selection:text-white overflow-x-hidden">
        <noscript><img height="1" width="1" style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1018163696775949&ev=PageView&noscript=1"
        /></noscript>
        {children}
      </body>
    </html>
  );
}
