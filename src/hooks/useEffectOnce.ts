import { useEffect, useRef } from 'react';

const useEffectOnce = (callback: Function) => {
  const calledOnce = useRef(false);

  useEffect(() => {
    if (!calledOnce.current) {
      callback();
      calledOnce.current = true;
    }
  }, [callback]);
};

export default useEffectOnce;
