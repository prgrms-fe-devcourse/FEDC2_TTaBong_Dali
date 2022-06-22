import { useCallback, useEffect, useRef } from 'react';

const useTimeoutFn = (fn, ms) => {
  const timeoutId = useRef();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    timeoutId.current && clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    // eslint-disable-next-line no-unused-expressions
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};

const useTimeout = (fn, ms) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};

export default useTimeout;
