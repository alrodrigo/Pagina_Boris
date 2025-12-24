import type { Metadata } from "next";
import { Inter, Bebas_Neue, Anton } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Dr. Jackaroe Reis - Cirujano Digestivo y Bariátrico | La Paz, Bolivia",
  description: "Cirujano digestivo especializado en cirugía bariátrica y laparoscopía avanzada. Atención en Hospital Modelo Corea (El Alto) y Clínica Unifranz (La Paz). Más de 15 años de experiencia.",
  keywords: ["cirujano digestivo", "cirugía bariátrica", "laparoscopía avanzada", "La Paz", "Bolivia", "Hospital Corea", "Clínica Unifranz", "Dr. Jackaroe Reis"],
  authors: [{ name: "Dr. Jackaroe Reis" }],
  openGraph: {
    title: "Dr. Jackaroe Reis - Cirujano Digestivo y Bariátrico",
    description: "Especialista en cirugía digestiva, bariátrica y laparoscopía avanzada en La Paz, Bolivia.",
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
        className={`${inter.variable} ${bebasNeue.variable} ${anton.variable} antialiased bg-primary-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
