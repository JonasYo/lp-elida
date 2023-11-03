'use client';

type IProps = {
  content: {
    title: string;
    link: string;
  };
};

const Button = (props: IProps) => {
  const handleNavigate = () => {
    window.location.href = props.content.link;
  };

  return (
    <button
      type="button"
      className="mx-auto inline-flex h-11 w-full items-center justify-center rounded-full bg-green-100 px-4 py-2 font-inter text-base font-medium tracking-tight text-slate-700 hover:bg-pink-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-800 active:text-slate-300 md:w-96"
      onClick={handleNavigate}
    >
      {props.content.title}
    </button>
  );
};

export default Button;
