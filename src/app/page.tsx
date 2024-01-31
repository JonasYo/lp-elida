import Image from 'next/image';

import Button from '@/components/Button';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main title="AppConfig.title" description={AppConfig.description}>
      <section className="pt-28" data-aos="fade-up" data-aos-duration="1100">
        <div className="mx-auto md:min-w-[1024px] md:max-w-[1024px]">
          <div className="flex flex-1 justify-center">
            <Image
              alt="Icone psicologia"
              src="/assets/images/icone-psicologia.png"
              width={256}
              height={256}
            />
          </div>

          <div className="mt-10 flex flex-1 flex-col justify-center px-4 pb-4 md:px-0 md:pb-0">
            <h2 className="mx-auto mb-4 font-dancing text-4xl md:text-6xl">
              Élida Siqueira
            </h2>

            <div className="mb-4 flex items-center justify-center">
              <div className="h-0 w-16 border-b border-neutral-950 md:w-52" />

              <div className="mx-auto flex flex-col justify-center font-inter md:mx-12">
                <p className="mx-auto max-w-6xl text-xl font-medium md:text-lg">
                  PSICÓLOGA CLÍNICA
                </p>
                <p className="mx-auto my-2 max-w-2xl text-xl md:text-lg">
                  Curitiba - PR
                </p>
                <p className="mx-auto max-w-2xl text-xl font-medium md:text-lg">
                  CRP 08/38058
                </p>
              </div>

              <div className="h-0 w-16 border-b border-neutral-950 md:w-52" />
            </div>

            <Button
              content={{
                title: 'Entre em contato',
                link: 'https://api.whatsapp.com/send?phone=5541987566809&text=Olá,%20boa%20tarde!%20Estou%20interessado(a)%20em%20obter%20mais%20informações%20sobre%20o%20seu%20processo%20psicoterapêutico.%20Pode%20me%20fornecer%20mais%20detalhes?',
              }}
            />
          </div>

          <div className="relative mx-auto mt-4 h-10 w-full md:w-2/4">
            <Image
              className="px-4"
              src="/assets/images/divider-one.webp"
              alt="Icone de divisão de seção"
              fill
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto px-4 md:min-w-[1024px] md:max-w-[1024px]">
          <div
            className="flex flex-1 flex-col justify-center pt-10"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <h2 className="mx-auto font-dancing text-4xl md:text-6xl">
              Vamos fazer Psicoterapia?
            </h2>

            <p className="mx-auto mt-4 font-dancing text-3xl">
              Tornar-se quem se é...
            </p>
          </div>

          <div
            className="mt-10 rounded-bl-3xl rounded-tr-3xl bg-pink-100 p-4 font-comfortaa"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <p className="mt-0 font-comfortaa">
              Convido você a dar um passo significativo, iniciando uma jornada
              de psicoterapia! A psicoterapia é uma caminhada compartilhada com
              um psicólogo, centrada na Psicologia Analítica. Através do
              diálogo, exploramos seus aspectos conscientes e inconscientes para
              promover sua saúde mental e autoconhecimento. Entender os
              "porquês" e "para quês" de sua vida gera transformações. Pronto
              para começar essa jornada conosco?
            </p>
          </div>

          <div
            className="mx-auto mt-4 flex flex-1 flex-col justify-center"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <p className="mx-auto text-center font-comfortaa text-lg">
              <span className="mr-2 font-bold">⤷</span>
              Atendimento <b>Online;</b>
            </p>

            <p className="mx-auto mb-4 mt-2 text-center font-comfortaa text-lg">
              <span className="mr-2 font-bold">⤷</span>
              Atendimento a <b>Adolescentes, Adultos e Idosos;</b>
            </p>

            <Button
              content={{
                title: 'Saiba mais',
                link: '/therapy',
              }}
            />
          </div>

          <div
            className="relative mx-auto mt-8 h-10 w-full md:w-4/6"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <Image
              className="px-4"
              src="/assets/images/divider-two.webp"
              alt="Icone de divisão de seção"
              fill
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto px-4 md:min-w-[1024px] md:max-w-[1024px]">
          <div
            className="flex flex-row items-center justify-center pt-10"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="h-0 w-16 border-b border-neutral-950 md:w-52" />

            <h2 className="mx-auto font-dancing text-4xl md:text-6xl">
              Sobre Mim
            </h2>

            <div className="h-0 w-16 border-b border-neutral-950 md:w-52" />
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <div
              className="mt-10 rounded-bl-3xl rounded-tr-3xl bg-pink-100 p-4 font-comfortaa md:mr-16"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              <p className="">
                Olá! Sou Élida Siqueira, sou psicóloga clínica CRP 08/3883,
                formada pela Universidade Unibrasil de Curitiba e pós graduanda
                em Terapia Cognitivo Comportamental. Realizo atendimentos de
                adultos e adolescentes maiores de 16 anos. Meu principal
                objetivo é proporcionar um tratamento que se adeque às demandas
                de cada indivíduo, utilizando-se das melhores intervenções
                disponíveis na área da Psicologia. Minha abordagem teórica é a
                Terapia Cognitivo Comportamental, é indicada para tratar
                diversos transtornos mentais, sendo uma abordagem clara, direta
                e eficiente.
              </p>
            </div>

            <div
              className="my-6 flex-1 flex-col justify-center md:hidden"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <Button
                content={{
                  title: 'Conheça um pouco mais',
                  link: '/about',
                }}
              />
            </div>

            <Image
              src="/assets/images/me.jpg"
              alt="Icone psicologia"
              height={256}
              width={256}
              data-aos="fade-left"
              data-aos-duration="1100"
            />
          </div>

          <div
            className="mt-6 hidden flex-1 flex-col justify-center md:flex"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <Button
              content={{
                title: 'Conheça um pouco mais',
                link: '/about',
              }}
            />
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
            className="flex flex-row items-center justify-center pt-10"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="h-0 w-16 border-b border-neutral-950 md:w-52" />

            <h2 className="mx-auto font-dancing text-4xl md:text-6xl">Local</h2>

            <div className="h-0 w-16 border-b border-neutral-950 md:w-52" />
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <Image
              src="/assets/illustration/therapy.svg"
              alt="Icone psicologia"
              height={256}
              width={256}
              data-aos="fade-right"
              data-aos-duration="1100"
            />

            <div
              className="mt-10 rounded-bl-3xl rounded-tr-3xl bg-pink-100 p-4 font-comfortaa md:ml-16"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <p className="">
                Meu trabalho hoje é feito de maneira remota, online, é
                semelhante ao presencial e tem a mesma duração. Os encontros são
                feitos por chamada de vídeo pelas plataformas Google Meet, Zoom
                e WhatsApp. É importante ressaltar que o profissional atende em
                um lugar privado, garantindo o sigilo e seguindo o código de
                ética da psicologia.
              </p>
            </div>
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
                link: 'https://api.whatsapp.com/send?phone=5541987566809&text=Olá,%20boa%20tarde!%20Estou%20interessado(a)%20em%20obter%20mais%20informações%20sobre%20o%20seu%20processo%20psicoterapêutico.%20Pode%20me%20fornecer%20mais%20detalhes?',
              }}
            />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
