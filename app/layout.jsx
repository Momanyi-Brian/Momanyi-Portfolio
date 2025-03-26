import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: "Momanyi Brian Portfolio | Frontend Developer",
  description: "The combination of my passion for design, code & interaction positions me in a unique place in the web development world.",
  authors: [{ name: "Momanyi Brian" }],
  publisher: "Moreashan Agency Kenya",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://momanyi.moreashan.com'),
  openGraph: {
    title: "Momanyi Brian Portfolio | Frontend Developer",
    description:
      "The combination of my passion for design, code & interaction positions me in a unique place in the web development world.",
    images: ['previewPortfolio.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
