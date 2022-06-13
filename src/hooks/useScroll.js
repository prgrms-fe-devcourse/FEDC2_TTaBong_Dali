import { useEffect, useState } from 'react';

export const useScrollDown = () => {
  const [prevOffsetY, setOffsetY] = useState(0);
  const [offset] = useScroll();

  const [scrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    if (offset.y > prevOffsetY) {
      setScrollDown(true);
      setOffsetY(offset.y);
    }
    if (offset.y < prevOffsetY) {
      setScrollDown(false);
      setOffsetY(offset.y);
    }
  }, [offset]);

  return scrollDown;
};

const useScroll = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
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
