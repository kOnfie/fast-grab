import { useEffect } from "react";

export function useHandleCloseScroll(param: boolean) {
  useEffect(() => {
    if (param) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [param]);
}
