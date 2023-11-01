import router from 'next/router';

type IProps = {
  content: {
    title: string;
    link: string;
  };
};

const Button = (props: IProps) => {
  const handleNavigateToWhatsapp = () => {
    router.push(props.content.link);
  };

  return (
    <button
      type="button"
      className="group mx-auto mt-6 inline-flex h-11 w-96 max-w-2xl items-center justify-center rounded-full bg-green-100 px-4 py-2 text-base font-semibold tracking-tight text-slate-700 hover:bg-slate-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-800 active:text-slate-300"
      onClick={handleNavigateToWhatsapp}
    >
      {props.content.title}
    </button>
  );
};

export default Button;
