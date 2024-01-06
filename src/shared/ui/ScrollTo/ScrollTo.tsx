import { useState, useEffect } from 'react';

import classes from './scrollTo.module.css';

const ScrollTo = () => {
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  const handleScroll = () =>
    setIsBtnVisible(window.scrollY > window.innerHeight - 200);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isBtnVisible && (
      <button className={classes.btn} onClick={handleClick}>
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 10.25L8.75 2.75L1.25 10.25"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </button>
    )
  );
};
export default ScrollTo;
