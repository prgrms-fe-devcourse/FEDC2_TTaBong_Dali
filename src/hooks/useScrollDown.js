import { useEffect, useState } from 'react';
import { useScroll } from './useScroll';

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
