import {useCallback, useEffect, useState} from "react";

export const useMedia = (match) => {
  const [matched, setMatched] = useState(false);

  const handleChange = useCallback(e => {
    setMatched(e.matches);
  }, []);

  useEffect(() => {
    let matched = null;
    if (window.matchMedia) {
      matched = window.matchMedia(match)
      if (matched) {
        setMatched(matched.matches);
        if(matched.addEventListener) {
          matched.addEventListener('change', handleChange)
        }
        return () => {
          if(matched.removeEventListener) {
            matched.removeEventListener('change', handleChange);
          }
        }
      }
    }
  }, [handleChange, match]);
  return matched;
}