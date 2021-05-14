import { useEffect, useState, useRef } from "react";

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

export const useSideNavMediaClose = (position, handler, element = window) => {
  const savedHandler = useRef();
  useEffect(() => {
    const listener = (x) => {
      if (x.matches) {
        handler();
      } else {
        return;
      }
    };
    savedHandler.current = listener;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const x = element.matchMedia(`(min-width: ${position})`);

    const eventListener = (event) => savedHandler.current(event);

    x.addEventListener("change", eventListener);
    return () => {
      x.removeEventListener("change", eventListener);
    };
  }, [handler, position,element]);
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
