import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. <br />
      <br /> Made by{' '}
      <a href="https://lp-portfolio-frontend-cvtmosbr9-jonasyo.vercel.app/">
        Jonas Marcelino
      </a>
      .
    </footer>
  );
};

export default Footer;
