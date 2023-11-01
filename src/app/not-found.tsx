import Image from 'next/image';

export default function NotFound() {
  return (
    <div>
      <Image
        src="/assets/images/404.svg"
        alt=""
        width={400}
        height={400}
        className="m-auto my-24"
      />
      <h1
        className="m-auto my-10 w-full text-center text-3xl font-normal max-[600px]:text-2xl"
        data-aos="fade-left"
        data-aos-duration="1100"
      >
        PÁGINA NÃO ENCONTRADA.
      </h1>
    </div>
  );
}
