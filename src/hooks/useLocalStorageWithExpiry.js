import { useEffect, useState } from "react";

function useLocalStorageWithExpiry(initialState, key, valueExpiry) {

  const [value, setValue] = useState(() => {
    let storedValue = localStorage.getItem(key);
    if (storedValue) {
      const now = new Date();
      storedValue = JSON.parse(storedValue);
      if (storedValue.expiry && now.getTime() > storedValue.expiry) {
        localStorage.removeItem(key);
        return initialState;
      } else {
        return storedValue.data;
      }
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    const now = new Date();
    if (value?.length) {
      if (value.expiry && now.getTime() > value.expiry) {
        localStorage.removeItem(key);
      } else {
        const newValue = {
          data: value,
          expiry: now.getTime() + valueExpiry
        }
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    }
  }, [value, key, valueExpiry]);

  return [value, setValue];
}

export default useLocalStorageWithExpiry;
