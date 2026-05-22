import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// 1. Headings ke liye Serif Font (Luxury & Premium Look)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // Isse hum CSS mein use kar payenge
  weight: ["400", "500", "600", "700"],
});

// 2. Body/Content ke liye Sans Font (Clean & Readable)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Muraliz Tiles | Premium Luxury Surfaces",
  description: "Exquisite tile collections for luxury spaces and premium interiors.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}