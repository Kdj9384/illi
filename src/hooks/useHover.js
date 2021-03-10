import React, { useEffect, useRef } from "react";

function useHover() {
  const element = useRef();

  const onHoverFunction = () => {
    element.current.style.backgroundColor = "blue";
  };

  const leaveHoverFunction = () => {
    element.current.style.backgroundColor = "white";
  };

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHoverFunction);
      element.current.addEventListener("mouseleave", leaveHoverFunction);
    }
    return () => {
      element.current.removeEventListener("mouseover", onHoverFunction);
      element.current.removeEventListener("mouseleave", leaveHoverFunction);
    };
  }, []);
  return { ref: element };
}

export default useHover;
