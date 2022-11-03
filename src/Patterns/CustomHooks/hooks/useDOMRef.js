import { useState, useCallback } from "react";

export const useDOMRef = () => {
  const [DOMRef, setDOMRef] = useState({});
  const setRef = useCallback((node) => {
    if (node == null) return;
    setDOMRef((prevDOMRef) => ({
      ...prevDOMRef,
      [node.dataset.refkey]: node,
    }));
  }, []);
  return [DOMRef, setRef];
};
