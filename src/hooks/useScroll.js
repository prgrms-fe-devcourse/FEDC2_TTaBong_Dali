import { useEffect, useRef } from 'react';
import useRafState from './useRafState';

export const useScroll = () => {
  const [offset, setOffset] = useRafState({ x: 0, y: 0 });
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const handleScroll = () => {
      setOffset({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
      });
    };

    element.addEventListener('scroll', handleScroll, { passive: true });

    // eslint-disable-next-line consistent-return
    return () => element.removeEventListener('scroll', handleScroll);
  }, [ref.current, setOffset]);

  return [ref, offset];
};

export default useScroll;
