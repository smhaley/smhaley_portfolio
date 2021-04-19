import { useEffect } from "react";

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
  useEffect(
    () => {
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
        x.addEventListener("change", listener);
      };
    },
    handler,
    position
  );
};
