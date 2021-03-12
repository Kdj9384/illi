// 콘텐츠 인덱스 제공
import React, { useRef, useState } from "react";
import AppCss from "./useSlideShow.module.css";
import testimg from "../images/img.png";

function StateBuilder() {
  const [state, setState] = useState(0);
  const [dist, setDist] = useState(0);
  return { state, setState, dist, setDist };
}

function Slider({ cnt, img, id, state, maxWidth, viewEle }) {
  const [ishover, setIshover] = useState(false);
  const slideStyle = {
    backgroundColor: "#FAFAFA",
  };
  const hoverStyle = {
    backgroundColor: "white",
  };

  function SliderHover() {
    setIshover(!ishover);
  }

  function mouseEnter(event) {
    SliderHover();
  }

  return (
    <ul className={AppCss.Slider}>
      <li
        style={ishover ? hoverStyle : slideStyle}
        onMouseEnter={(event) => mouseEnter(event)}
        onMouseLeave={(event) => mouseEnter(event)}
      >
        <img src={testimg} alt="slider images" />
        <p>{cnt + state}</p>
        <p>일리소프트일리소프트일리소프트일리소프</p>
      </li>
    </ul>
  );
}

function SliderContainer() {
  const viewEle = useRef();

  const sliders = [
    { cnt: "hi", img: { testimg } },
    { cnt: "hL", img: { testimg } },
    { cnt: "hI", img: { testimg } },
    { cnt: "hK", img: { testimg } },
  ];
  const indicators = [0, 1, 2, 3];

  const { state, setState, dist, setDist } = StateBuilder();

  const viewWidth = 100;
  const viewSize = { width: `${100}%` };
  const maxWidth = { width: `${0.3}rem` };

  const indicators_style = {
    backgroundColor: "black",
  };
  const styles = {
    transform: `translate(${dist}px, 0px)`,
    transition: "0.3s",
  };

  function AniFunc(cdist, cstate) {
    if (cstate + state >= sliders.length) {
      setDist(0);
      setState(0);
    } else if (cstate + state < 0) {
      setDist(-viewWidth * (sliders.length - 1));
      setState(sliders.length - 1);
    } else {
      setDist(dist + cdist);
      setState(state + cstate);
    }
  }

  return (
    <div className={AppCss.SliderContainer}>
      <button onClick={() => AniFunc(viewEle.current.offsetWidth, -1)}>
        prev
      </button>

      <div className={AppCss.view} style={viewSize} ref={viewEle}>
        <div className={AppCss.absolutecontainer} style={styles}>
          {sliders.map((slider, i) => {
            return (
              <Slider
                {...slider}
                key={i}
                id={i}
                state={state}
                maxWidth={maxWidth}
                viewEle={viewEle}
              ></Slider>
            );
          })}
        </div>
        <div className={AppCss.indicatorContainer}>
          {indicators.map((indi, i) => {
            return (
              <span
                className={AppCss.indicators}
                style={i === state ? indicators_style : null}
                key={i}
              ></span>
            );
          })}
        </div>
      </div>

      <button onClick={() => AniFunc(-viewEle.current.offsetWidth, 1)}>
        next
      </button>
    </div>
  );
}

export default SliderContainer;
