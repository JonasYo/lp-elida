'use client';

import 'aos/dist/aos.css';

import AOS from 'aos';
import { Comfortaa, Dancing_Script, Inter } from 'next/font/google';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import Meta from '@/templates/Meta';

type IMainProps = {
  title: string;
  description: string;
  showOnlyChildren?: boolean;
  children: ReactNode;
};

const inter = Inter({
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'block',
});

const dancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  style: 'normal',
  subsets: ['latin'],
  display: 'block',
});

const comfortaa = Comfortaa({
  variable: '--font-comfortaa',
  style: 'normal',
  subsets: ['latin'],
  display: 'block',
});

const Main = (props: IMainProps) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center px-1 antialiased">
      {!props?.showOnlyChildren && <ScrollToTop />}

      <Meta title={props.title} description={props.description} />

      {!props?.showOnlyChildren && pathname === '/' && (
        <div
          style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
          }}
        >
          <Image
            alt="imagem de background"
            src="/assets/images/background-mobile.webp"
            layout="fill"
            objectFit="cover"
            className="flex md:hidden"
          />

          <Image
            alt="imagem de background"
            src="/assets/images/background-tablet.webp"
            layout="fill"
            objectFit="cover"
            className="hidden md:flex lg:hidden"
          />

          <Image
            alt="imagem de background"
            src="/assets/images/background-desk.webp"
            layout="fill"
            objectFit="cover"
            className="hidden lg:flex"
          />
        </div>
      )}

      <div className="absolute w-full bg-transparent">
        {!props?.showOnlyChildren && <Header />}

        <main
          style={{ contain: 'paint' }}
          className={`${inter.variable} ${dancingScript.variable} ${comfortaa.variable} content text-xl`}
        >
          {props.children}
        </main>

        {!props?.showOnlyChildren && <Footer />}
      </div>
    </div>
  );
};

export { Main };
