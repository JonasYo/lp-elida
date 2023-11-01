import '@/styles/global.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
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

  return <Component {...pageProps} />;
};

export default MyApp;
