import { useState } from "react";

export function useLocalStorage<T>(key: string) {
  const [storage, setStorage] = useState<T | null>(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      if (value) return JSON.parse(value);
    }

    return null;
  });

  function set(key: string, content: T) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(content));
      setStorage(content);
    }
  }

  return {
    storage,
    set,
  };
}
