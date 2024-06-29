import { useCallback, useState } from 'react';

export const useToggle = (callback: () => void) => {
  const [value, setValue] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setValue(!value);
    callback();
  }, [callback]);

  return toggle;
};
