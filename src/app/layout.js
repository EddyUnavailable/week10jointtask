import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import navStyles from "./css/nav.module.css";
import Link from "next/link";
import footerStyles from "./css/footer.module.css";
import headerStyles from "./css/header.module.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className={headerStyles.header}><p>Header</p></header>
          <nav className={navStyles.nav}>
          <Link className={navStyles.navButton} href="/">
            <Image src="/people.png" alt="" width={20} height={20} title="Home" />
          </Link>
          <Link className={navStyles.navButton} href="/page1">
            <Image src="/people.png" alt="" width={20} height={20} title="Page 1" />
          </Link>
          <Link className={navStyles.navButton} href="/page2">
          <Image src="/people.png" alt="" width={20} height={20} title="Page 2" />
          </Link>
          <Link className={navStyles.navButton} href="/page3">
          <Image src="/people.png" alt="" width={20} height={20} title="Page 3" />
          </Link>
          <Link className={navStyles.navButton} href="/page4">
          <Image src="/people.png" alt="" width={20} height={20} title="Page 4" />
          </Link>
          </nav>
            <main>
              {children}
            </main>
            
      
        <footer className={footerStyles.footer}><p>GSAP demo by Maria and Eddy </p></footer>
      </body>
    </html>
  );
}
