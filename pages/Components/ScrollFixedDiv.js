import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'

const ScrollFixedDiv = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollFixedDivOffsetTop = document.querySelector('.scroll-fixed-div').offsetTop;
      setIsFixed(scrollY >= scrollFixedDivOffsetTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.scrollFixedDiv} ${isFixed ? styles.fixed : ''}`}>
      {/* Content goes here */}
    </div>
  );
};

export default ScrollFixedDiv;
