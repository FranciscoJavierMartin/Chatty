import { useEffect, useState } from 'react';

const useDetectOutsideClick = (ref: any, initialState: boolean) => {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  useEffect(() => {
    const onClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive((prev) => !prev);
      }
    };

    if (isActive) {
      window.addEventListener('mousedown', onClick);
    }

    return () => {
      window.removeEventListener('mousedown', onClick);
    };
  }, [isActive, ref]);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;
