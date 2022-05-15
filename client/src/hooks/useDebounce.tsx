import { useState, useEffect } from "react";

export const useDebounce = (initialValue: string) => {
  const [debounceValue, setDebounceValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initialValue);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [initialValue]);

  return debounceValue;
};
