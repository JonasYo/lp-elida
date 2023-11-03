import '@/styles/global.css';
import 'aos/dist/aos.js';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://lp-elida.vercel.app/'),
  title: 'Elida Siqueira Marcelino | Psicologa',
  themeColor: '#000',
  description:
    'Eu sou Elida, uma psicóloga dedicada a ajudar você a encontrar equilíbrio, resiliência e bem-estar. Com uma abordagem compassiva e profissional, estou aqui para guiá-lo em sua jornada de autodescoberta e crescimento pessoal.',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  applicationName: 'Elida Siqueira Marcelino | Psicologa',
  appleWebApp: {
    statusBarStyle: 'black',
  },
  keywords:
    'elida siqueira marcelino, psicologa curitiba, psicologia adolescente, psicologa ansiedade, psicologa infantil, psicologa infantil curitiba, psicologa, psicóloga online, brazil, brasil',
  openGraph: {
    type: 'website',
    url: 'https://lp-elida.vercel.app/',
    title: 'Elida Siqueira Marcelino | Psicologa',
    description:
      'Eu sou Elida, uma psicóloga dedicada a ajudar você a encontrar equilíbrio, resiliência e bem-estar. Com uma abordagem compassiva e profissional, estou aqui para guiá-lo em sua jornada de autodescoberta e crescimento pessoal.',
    images: '/assets/images/me.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://lp-elida.vercel.app/',
    creator: '@',
    title: 'Elida Siqueira Marcelino | Psicologa',
    images: '/assets/images/me.jpg',
    description:
      'Eu sou Elida, uma psicóloga dedicada a ajudar você a encontrar equilíbrio, resiliência e bem-estar. Com uma abordagem compassiva e profissional, estou aqui para guiá-lo em sua jornada de autodescoberta e crescimento pessoal.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      {/* <head>
        <title>Next.js</title>
      </head> */}

      <body>{children}</body>

      <Analytics />
    </html>
  );
}
