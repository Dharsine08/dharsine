import { useEffect, useRef } from "react";

// Adds the "is-visible" class once an element scrolls into view.
// Paired with the .fade-in-section CSS class, which is a no-op under
// prefers-reduced-motion (see index.css).
export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
