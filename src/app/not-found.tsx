import Image from 'next/image';

import Button from '@/components/Button';
import { Main } from '@/templates/Main';

const NotFound = () => {
  return (
    <Main title="Lorem ipsum" description="Lorem ipsum" showOnlyChildren>
      <div className="flex h-full flex-col-reverse items-center justify-center gap-16 px-4 py-10 md:gap-28 md:px-44 md:py-20 lg:flex-row lg:p-24">
        <div className="w-full xl:w-1/4">
          <h1 className="my-2 text-center text-2xl font-bold text-gray-800 md:text-4xl">
            Conteúdo não encontrado! 404
          </h1>

          <p className="my-2 mb-4 text-center text-gray-800">
            Infelizmente não conseguimos localizar a página que você procura.
          </p>

          <Button content={{ title: 'Voltar', link: '/' }} />
        </div>

        <Image
          src="/assets/illustration/404-error.svg"
          alt="Icone de divisão de seção"
          width={400}
          height={400}
          data-aos="fade-right"
          data-aos-duration="1100"
        />
      </div>
    </Main>
  );
};

export default NotFound;
