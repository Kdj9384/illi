// 콘텐츠 인덱스 제공
import React, { useState } from "react";
import AppCss from "./useSlideShow.module.css";

function StateBuilder() {
  const [state, setState] = useState(0);
  const [dist, setDist] = useState(0);
  return { state, setState, dist, setDist };
}

function Slider({ cnt, img, id, state, maxWidth }) {
  return (
    <ul className={AppCss.Slider}>
      <li>
        <img src={img} alt="slider images" style={maxWidth} />
        <p>{cnt + id + state}</p>
      </li>
      <li>
        <img src={img} alt="slider images" style={maxWidth} />
        <p>{cnt + id + state}</p>
      </li>
      <li>
        <img src={img} alt="slider images" style={maxWidth} />
        <p>{cnt + id + state}</p>
      </li>
    </ul>
  );
}

function SliderContainer() {
  const sliders = [
    { cnt: "hi", img: "" },
    { cnt: "h2", img: "" },
    { cnt: "h3", img: "" },
    { cnt: "h4", img: "" },
  ];
  const indicators = [0, 1, 2, 3];

  const { state, setState, dist, setDist } = StateBuilder();

  const viewWidth = 500;
  const maxWidth = { width: `${viewWidth}px` };

  const indicators_style = {
    backgroundColor: "black",
  };
  const styles = {
    transform: `translate(${dist}px, 0px)`,
    transition: "0.23s",
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
      <button onClick={() => AniFunc(viewWidth, -1)}>prev</button>

      <div className={AppCss.view} style={maxWidth}>
        <div className={AppCss.absolutecontainer} style={styles}>
          {sliders.map((slider, i) => {
            return (
              <Slider
                {...slider}
                key={i}
                id={i}
                state={state}
                maxWidth={maxWidth}
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
              ></span>
            );
          })}
        </div>
      </div>

      <button onClick={() => AniFunc(-viewWidth, 1)}>next</button>
    </div>
  );
}

export default SliderContainer;
