import type { Metadata } from "next";
import { Inter, Bebas_Neue, Anton, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Boris Delgado Bernal - Médico Cirujano y Gerencia Hospitalaria | La Paz, Bolivia",
  description: "Médico Cirujano especializado en Gerencia y Administración Hospitalaria. Jefe Médico en Caja de Salud de Caminos. Director Hospital N°1 Obrajes. Maestría en Administración en Salud - Universidad de Chile.",
  keywords: ["médico cirujano", "gerencia hospitalaria", "administración en salud", "La Paz", "Bolivia", "Caja de Salud de Caminos", "Hospital Obrajes", "Dr. Boris Delgado Bernal", "laparoscopía abdominal"],
  authors: [{ name: "Dr. Boris Delgado Bernal" }],
  openGraph: {
    title: "Dr. Boris Delgado Bernal - Médico Cirujano y Gerencia Hospitalaria",
    description: "Especialista en Gerencia y Administración Hospitalaria. Jefe Médico Caja de Salud de Caminos, La Paz, Bolivia.",
    type: "website",
    locale: "es_BO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${anton.variable} ${montserrat.variable} antialiased bg-primary-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}

