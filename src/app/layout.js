// src/app/layout.js
import "./globals.css"; // Sabse upar Tailwind ki CSS file import karein

export const metadata = {
  title: "MURALIZ | The Magic of Surfaces",
  description: "Experience premium tile designs and murals for your space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts (Optional: Elegant Serif Look ke liye) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-black selection:bg-white/20 selection:text-white">
        {/* 'children' wo content hai jo page.js se aayega */}
        {children}
      </body>
    </html>
  );
}