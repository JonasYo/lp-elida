import '@/styles/global.css';
import 'aos/dist/aos.js';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://elida.vercel.app'),
  title: 'Élida Siqueira | Psicóloga',
  themeColor: '#000',
  description:
    'Psi Élida Siqueira. Te convido a dar esse importante passo, o de iniciar um processo psicoterapêutico! Atendimentos online.',
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
  applicationName: 'Élida Siqueira | Psicóloga',
  appleWebApp: {
    statusBarStyle: 'black',
  },
  keywords:
    'elida siqueira marcelino, psicologa curitiba, psicologia adolescente, psicologa ansiedade, psicologa infantil, psicologa infantil curitiba, psicologa, psicóloga online, brazil, brasil',
  openGraph: {
    type: 'website',
    url: 'https://lp-elida.vercel.app/',
    title: 'Élida Siqueira | Psicóloga',
    description:
      'Psi Élida Siqueira. Te convido a dar esse importante passo, o de iniciar um processo psicoterapêutico! Atendimentos online.',
    images: '/assets/images/me.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://lp-elida.vercel.app/',
    creator: '@',
    title: 'Élida Siqueira | Psicóloga',
    images: '/assets/images/me.jpg',
    description:
      'Psi Élida Siqueira. Te convido a dar esse importante passo, o de iniciar um processo psicoterapêutico! Atendimentos online.',
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

      <Analytics />
    </html>
  );
}
