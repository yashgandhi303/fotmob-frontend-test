import { useCallback, useState } from 'react';

const useToggle = (callback: () => void) => {
  const [value, setValue] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setValue(!value);
    callback();
  }, [callback]);

  return toggle;
};

export default useToggle;
