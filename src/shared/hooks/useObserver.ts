import { useRef, useEffect, useState } from 'react';

type Options = {
  root: null;
  rootMargin: string;
  threshold: number;
};

export const useObserver = (options: Options) => {
  const node = useRef<HTMLDivElement>(null);
  const [isIntersect, setIsIntersect] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const { isIntersecting } = entries[0];
    setIsIntersect(isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (node && node.current) observer.observe(node?.current);
    return () => {
      if (node && node.current) observer.disconnect();
    };
  }, [options]);

  return [node, isIntersect];
};
