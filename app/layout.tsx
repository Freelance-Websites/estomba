import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="title" content="Estomba" />
        <meta name="description" content="Una propuesta de inversión, que combina un edificio de vivienda de pocas unidades en armonía con un barrio de baja densidad, donde predominan las casas." />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
