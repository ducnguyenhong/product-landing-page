import { useEffect, useRef, useState } from 'react';

const attachMediaListener = (query, callback) => {
  try {
    query.addEventListener('change', callback);
    return () => query.removeEventListener('change', callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
};

const getInitialValueMedia = (query, initialValue) => {
  if (typeof initialValue === 'boolean') {
    return initialValue;
  }

  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    return window.matchMedia(query).matches;
  }

  return false;
};

export const useMediaQuery = (query, initialValue = true, getInitialValueInEffect = false) => {
  const [matches, setMatches] = useState(
    getInitialValueInEffect ? initialValue : getInitialValueMedia(query, initialValue)
  );
  const queryRef = useRef();

  useEffect(() => {
    if ('matchMedia' in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef?.current?.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }

    return undefined;
  }, [query]);

  return matches;
};
