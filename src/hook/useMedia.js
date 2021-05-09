import {useCallback, useEffect, useState} from "react";

export const useMedia = (match) => {
  const [matchedMedia, setMatchedMedia] = useState(false);

  const handleChange = useCallback(e => {
    setMatchedMedia(e.matches);
  }, []);

  useEffect(() => {
    let matched = null;
    if (window.matchMedia) {
      matched = window.matchMedia(match)
      if (matched) {
        setMatchedMedia(matched.matches);
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
    else {
      setMatchedMedia(false);
    }
  }, [handleChange, match]);
  
  return matchedMedia;
}