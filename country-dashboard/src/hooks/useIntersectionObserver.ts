import { useEffect, useRef } from "react";

interface UseIntersectionObserverOptions {
  onIntersect: () => void;
  enabled?: boolean;
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

export const useIntersectionObserver = ({
  onIntersect,
  enabled = true,
  root = null,
  rootMargin = "200px",
  threshold = 0,
}: UseIntersectionObserverOptions) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled || !targetRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // Prevent multiple triggers while the same element remains visible.
        observer.unobserve(entry.target);

        onIntersect();
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [enabled, onIntersect, root, rootMargin, threshold]);

  return targetRef;
};