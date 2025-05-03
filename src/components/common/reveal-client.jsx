'use client';

import { useMediaQuery } from '@/utils/helper-client';
import { Box } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const RevealClient = ({ children, threshold = 0.4 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const isTouch = useMediaQuery('(max-width: 991px)');

  useEffect(() => {
    if (!isTouch) {
      setShow(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isTouch, threshold]);

  return (
    <Box
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0px)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      {children}
    </Box>
  );
};

export default RevealClient;
