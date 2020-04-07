import { useState, useEffect } from "react";

const useMedia = (queries, values, defaultValues) => {
  const match = () =>
    values[
      queries.findIndex((q, i) => matchMedia(`(min-width: ${q}) `).matches)
    ] || defaultValues;

  const [value, setValue] = useState(match);
  useEffect(() => {
    const handler = () => setTimeout(() => setValue(match), 200);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
      clearTimeout(handler);
    };
  }, []);

  return value;
};

export default useMedia;
