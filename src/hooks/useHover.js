import React, { useEffect, useRef } from "react";
import background from "../images/illiLogoBack.png";

function useHover() {
  const element = useRef();

  const onHoverFunction = () => {
    element.current.style.backgroundImage = "none";

    // element.current.style.backgroundImage = `url(${background}`;
    console.log("illi logo");
  };

  const leaveHoverFunction = () => {
    element.current.style.backgroundImage = `url(${background})`;

    // element.current.style.backgroundImage = "none";
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
