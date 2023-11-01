import '@/styles/global.css';
import 'aos/dist/aos.js';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elida Siqueira Marcelino | Psicologa',
  themeColor: '#000',
  description: 'Elida é uma Psicologa',
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
    'Elida Siqueira, Elida Marcelino, Elida Siqueira Marcelino, Psicologa, Brazil, Brasil',
  openGraph: {
    type: 'website',
    url: 'https://lp-elida-2taa9n1x9-jonasyo.vercel.app/',
    title: 'Elida Siqueira Marcelino | Psicologa',
    description: 'Elida é uma Psicologa',
    images: '/assets/images/me.webp',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://lp-elida-2taa9n1x9-jonasyo.vercel.app/',
    creator: '@',
    title: 'Elida Siqueira Marcelino | Psicologa',
    images: '/assets/images/me.webp',
    description: 'Elida é uma Psicologa',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
