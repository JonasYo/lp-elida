import { Comfortaa, Dancing_Script, Inter } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
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
  const router = useRouter();

  return (
    <div className="relative flex w-full flex-col items-center px-1 antialiased">
      <ScrollToTop />

      {props.meta}

      {router.route === '/' && (
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
      )}

      <div className="absolute w-full bg-transparent">
        <Header />

        <main
          className={`${inter.variable} ${dancingScript.variable} ${comfortaa.variable} content text-xl`}
        >
          {props.children}
        </main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. <br />
          <br /> Made by{' '}
          <a href="https://lp-portfolio-frontend-cvtmosbr9-jonasyo.vercel.app/">
            Jonas Marcelino
          </a>
          .
        </footer>
      </div>
    </div>
  );
};

export { Main };
