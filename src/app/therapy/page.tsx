import Image from 'next/image';

import Button from '@/components/Button/Button';
import { Main } from '@/templates/Main';

const Therapy = () => (
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
            O que é a Psicoterapia?
          </h2>

          <div className="ml-8 h-0 w-full border-b border-neutral-950" />
        </div>

        <div
          className="mt-10 rounded-bl-3xl rounded-tr-3xl bg-pink-100 p-4 font-comfortaa"
          data-aos="fade-left"
          data-aos-duration="1100"
        >
          <p className="mt-0 font-comfortaa">
            A psicoterapia é um processo que proporciona ao paciente a adquirir
            consciência sobre seus próprios atos. É algo que precisa ser feito
            em médio a longo prazo, dessa forma, ele terá tempo para explorar
            totalmente a sua insegurança, dor, emoção ou experiência e
            compreender a situação. Assim, o paciente tem a oportunidade de
            resolver conflitos internos, desenvolver um melhor relacionamento
            consigo mesmo e com quem está ao seu redor. Ao mesmo tempo
            desenvolve o autoamor, a responsabilidade por seus atos,
            amadurecimento e autoconhecimento.
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

    <section className="bg-white pb-8">
      <div className="mx-auto px-4 md:min-w-[1024px] md:max-w-[1024px]">
        <div
          className="flex flex-1 items-center pt-10"
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          <h2 className="whitespace-nowrap font-dancing text-2xl font-bold md:text-4xl">
            A Terapia Cognitivo Comportamental
          </h2>

          <div className="ml-8 h-0 w-full border-b border-neutral-950" />
        </div>

        <div
          className="mt-10 rounded-bl-3xl rounded-tr-3xl bg-pink-100 p-4 font-comfortaa"
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          <p className="mt-0 font-comfortaa">
            A Terapia Cognitivo Comportamental ou TCC é uma abordagem da
            psicoterapia baseada na combinação de conceitos e teorias
            científicas, visando identificar padrões de comportamento,
            pensamento, crenças e hábitos que estão desencadeando a origem dos
            transtornos emocionais, indicando através de técnicas
            comportamentais, para alterar essas percepções de forma positiva.
          </p>
        </div>

        <div className="relative mx-auto mt-8 h-10 w-full md:w-3/6">
          <Image
            className="px-4"
            src="/assets/images/divider-one.webp"
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
              link: 'https://api.whatsapp.com/send?phone=5541987566809&text=Olá,%20boa%20tarde!%20Estou%20interessado(a)%20em%20obter%20mais%20informações%20sobre%20o%20seu%20processo%20psicoterapêutico.%20Pode%20me%20fornecer%20mais%20detalhes?',
            }}
          />
        </div>
      </div>
    </section>
  </Main>
);

export default Therapy;
