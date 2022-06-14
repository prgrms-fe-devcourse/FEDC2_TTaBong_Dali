import { useEffect } from 'react';
import useRafState from './useRafState';

export const useScroll = () => {
  const [offset, setOffset] = useRafState({ x: 0, y: 0 });
  useEffect(() => {
    const handleScroll = () => {
      setOffset({
        x: window.scrollX,
        y: window.pageYOffset,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setOffset]);

  return [offset];
};

export default useScroll;
