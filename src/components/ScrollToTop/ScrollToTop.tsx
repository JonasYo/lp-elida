import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      const shouldShowButton = window.scrollY > 500;
      setShowButton(shouldShowButton);
    };

    window.addEventListener('scroll', handleButtonVisibility);

    return () => {
      window.addEventListener('scroll', handleButtonVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 15;
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      }
      window.scrollBy(0, scrollStep);
    }, 15);
  };

  return (
    <button
      type="button"
      id="show-button"
      onClick={scrollToTop}
      className={`${
        showButton ? 'fixed' : 'hidden'
      } bottom-10 right-10 z-40 animate-pulse rounded bg-slate-300 p-2 shadow-2xl transition-all`}
    >
      <AiOutlineArrowUp className="text-4xl" />
    </button>
  );
};

export default ScrollToTop;
