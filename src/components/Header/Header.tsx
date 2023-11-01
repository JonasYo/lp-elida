import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

const dancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  style: 'normal',
  subsets: ['latin'],
  display: 'block',
});

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header style={{ backgroundColor: 'rgba(255, 255, 255, 0.5' }}>
      <nav className="border-gray-200 px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <span
              className={`${dancingScript.className} text-3xl font-bold text-black`}
            >
              {AppConfig.title}
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Image
                alt="Imagem de background"
                src="/assets/icons/bars.svg"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div
            className={`${
              !showMenu && 'hidden'
            } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
            id="mobile-menu-2"
          >
            <nav>
              <ul className="mt-4 flex flex-col text-xl md:mt-0 md:flex-row md:space-x-8">
                <li className="mr-6 py-2">
                  <Link
                    href="/"
                    className="border-none text-black hover:text-gray-900"
                  >
                    Página inicial
                  </Link>
                </li>

                <li className="mr-6 py-2">
                  <Link
                    href="/therapy"
                    className="border-none text-black hover:text-gray-900"
                  >
                    Psicoterapia
                  </Link>
                </li>

                <li className="mr-6 py-2">
                  <Link
                    href="/about/"
                    className="border-none text-black hover:text-gray-900"
                  >
                    Sobre Mim
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
