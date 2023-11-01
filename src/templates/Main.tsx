'use client';

import 'aos/dist/aos.css';

import AOS from 'aos';
import { Comfortaa, Dancing_Script, Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import Meta from '@/templates/Meta';

type IMainProps = {
  title: string;
  description: string;
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
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    window.addEventListener(
      'touchmove',
      () => {
        AOS.refresh();
      },
      false,
    );
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center px-1 antialiased">
      <ScrollToTop />

      <Meta title={props.title} description={props.description} />

      {/* {router.route === '/' && (
        <div
          style={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
          }}
        >
          <Image
            alt="Imagem de background"
            src="/assets/images/background-desk.webp"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )} */}

      <div className="absolute w-full bg-transparent">
        <Header />

        <main
          className={`${inter.variable} ${dancingScript.variable} ${comfortaa.variable} content text-xl`}
        >
          {props.children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export { Main };
