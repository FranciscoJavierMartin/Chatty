import { useCallback, useEffect } from 'react';

const useInfiniteScroll = (
  bodyRef: any,
  bottomLineRef: any,
  callback: Function,
) => {
  const handleScroll = useCallback(() => {
    const containerHeight = bodyRef?.current?.getBoundingClientRect().height;
    const { top: bottomLineTop } =
      bottomLineRef?.current?.getBoundingClientRect().height;

    if (bottomLineTop <= containerHeight) {
      callback();
    }
  }, [bodyRef, bottomLineRef, callback]);

  useEffect(() => {
    const bodyRefCurrent = bodyRef?.current;
    bodyRefCurrent?.addEventListener('scroll', handleScroll, true);

    return (): void => {
      bodyRefCurrent.removeEventListener('scroll', handleScroll, true);
    };
  }, [bodyRef, handleScroll]);
};

export default useInfiniteScroll;
