// src/hooks/useDimensions.js
import { useState, useEffect, useCallback } from 'react';

export function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const measure = useCallback(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setDimensions({
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, [ref]);

  useEffect(() => {
    measure(); // Measure initially
    window.addEventListener('resize', measure); // Measure on window resize
    return () => window.removeEventListener('resize', measure); // Cleanup
  }, [measure]);

  return dimensions;
}
