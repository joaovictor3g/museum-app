import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string) {
  const [storage, setStorage] = useState(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      if (value) return JSON.parse(value);
    }

    return null;
  });

  function set() {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, "");
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
  }, [key]);

  return {
    storage,
    set,
  };
}
