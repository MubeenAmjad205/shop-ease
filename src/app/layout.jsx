import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/header/header/header";
import Footer from "@/components/footer/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop Ease",
  description: "Manage your tasks efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-600`}>
        <Header/>
          {children}
          <Footer/>

        <Script 
          src="https://kit.fontawesome.com/c4254e24a8.js" 
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}