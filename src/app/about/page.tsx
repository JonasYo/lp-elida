import Image from 'next/image';

import Button from '@/components/Button/Button';
import { Main } from '@/templates/Main';

const About = () => (
  <Main title="Lorem ipsum" description="Lorem ipsum">
    <section className="bg-white">
      <div className="mx-auto px-4 md:min-w-[1024px] md:max-w-[1024px]">
        <div className="relative mx-auto mt-8 inline-block h-10 w-full md:w-2/6">
          <Image
            className="px-4"
            src="/assets/images/divider-one.webp"
            alt="Icone de divisão de seção"
            fill
          />
        </div>

        <div
          className="flex flex-1 items-center pt-10"
          data-aos="fade-left"
          data-aos-duration="1100"
        >
          <h2 className="whitespace-nowrap font-dancing text-2xl font-bold md:text-4xl">
            Um pouquinho sobre mim
          </h2>

          <div className="ml-8 h-0 w-full border-b border-neutral-950" />
        </div>

        <div
          className="mt-10 rounded-bl-3xl rounded-tr-3xl bg-pink-100 p-4 font-comfortaa"
          data-aos="fade-left"
          data-aos-duration="1100"
        >
          <p className="mt-0 font-comfortaa">
            Sou psicóloga clínica CRP 08/3883, formada pela Universidade
            Unibrasil de Curitiba e pós graduanda em Terapia Cognitivo
            Comportamental. Realizo atendimentos de adultos e adolescentes
            maiores de 16 anos. Meu principal objetivo é proporcionar um
            tratamento que se adeque às demandas de cada indivíduo,
            utilizando-se das melhores intervenções disponíveis na área da
            Psicologia. Minha abordagem teórica é a Terapia Cognitivo
            Comportamental, é indicada para tratar diversos transtornos mentais,
            sendo uma abordagem clara, direta e eficiente.
          </p>
        </div>

        <div className="relative mx-auto mt-8 h-10 w-full md:w-4/6">
          <Image
            className="px-4"
            src="/assets/images/divider-two.webp"
            alt="Icone de divisão de seção"
            fill
          />
        </div>
      </div>
    </section>

    <section className="bg-pink-100">
      <div
        className="mx-auto p-4 md:min-w-[1024px] md:max-w-[1024px]"
        data-aos="fade-left"
        data-aos-duration="1100"
      >
        <div className="flex flex-row items-center justify-center">
          <h2 className="mx-auto font-dancing text-4xl md:text-xl">
            (41) 9 8756-6809
          </h2>
        </div>

        <div className="mt-4 hidden flex-1 flex-col justify-center md:flex">
          <Button
            content={{
              title: 'Entre em contato',
              link: 'https://api.whatsapp.com/send?phone=5541987566809',
            }}
          />
        </div>
      </div>
    </section>
  </Main>
);

export default About;
