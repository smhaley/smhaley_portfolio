import { useEffect, useState } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export const useSideNavMediaClose = (position, handler) => {
  useEffect(() => {
    const x = window.matchMedia(`(min-width: ${position})`);

    const listener = (x) => {
      if (x.matches) {
        handler();
      } else {
        return;
      }
    };
    
    x.addEventListener("change", listener);
    return () => {
      x.removeEventListener("change", listener);
    };
  }, [handler, position]);
};

export const useIntersectionObserver = (
  elementRef,

  { threshold = 0, rootMargin = "-50% 0px -50% 0px", freezeOnceVisible = false }
) => {
  const [entry, setEntry] = useState();

  let frozen;
  if (entry) {
    frozen = entry.isIntersecting && freezeOnceVisible;
  }
  const updateEntry = ([entry]) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef.current; // DOM Ref
    const hasIOSupport = window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, threshold, rootMargin, frozen]);

  return entry;
};
