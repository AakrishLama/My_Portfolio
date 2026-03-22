import { useEffect, useRef } from 'react';

const defaultOptions = {
  threshold: 0.2,
  rootMargin: '0px',
};

export default function useScrollReveal(options) {
  const targetRef = useRef(null);

  useEffect(() => {
    const node = targetRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      if (node) {
        node.classList.add('scroll-reveal', 'in-view');
      }
      return undefined;
    }

    node.classList.add('scroll-reveal');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, options || defaultOptions);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return targetRef;
}
