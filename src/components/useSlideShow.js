// 콘텐츠 인덱스 제공
import React, { useRef, useState } from "react";
import AppCss from "./useSlideShow.module.css";
import testimg from "../images/img.png";
import arrow from "../images/next.png";

function StateBuilder() {
  const [state, setState] = useState(0);
  const [dist, setDist] = useState(0);
  return { state, setState, dist, setDist };
}

function Slider({ cnt, img, id, state }) {
  return (
    <ul className={AppCss.Slider}>
      <li>
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
    { cnt: "h1", img: { testimg } },
    { cnt: "h2", img: { testimg } },
    { cnt: "h3", img: { testimg } },
    { cnt: "h4", img: { testimg } },
    { cnt: "h5", img: { testimg } },
    { cnt: "h6", img: { testimg } },
    { cnt: "h7", img: { testimg } },
    { cnt: "h8", img: { testimg } },
  ];
  const indicators = [0, 1, 2];

  const { state, setState, dist, setDist } = StateBuilder();

  const viewWidth = 100;

  const indicators_style = {
    backgroundColor: "black",
  };
  const styles = {
    transform: `translate(${dist}px, 0px)`,
    transition: "0.3s",
  };

  function AniFunc(cdist, cstate) {
    if (cstate + state >= sliders.length / 3) {
      // setDist(0);
      // setState(0);
    } else if (cstate + state < 0) {
      // setDist(-viewWidth * (sliders.length - 1));
      // setState(sliders.length - 1);
    } else {
      setDist(dist + cdist);
      setState(state + cstate);
    }
  }

  return (
    <div className={AppCss.SliderContainer}>
      <button onClick={() => AniFunc(viewEle.current.offsetWidth, -1)}>
        <img
          src={arrow}
          alt="arrow left"
          style={{ transform: "rotate(180deg)" }}
        />
      </button>

      <div className={AppCss.view} ref={viewEle}>
        <div className={AppCss.absolutecontainer} style={styles}>
          {sliders.map((slider, i) => {
            console.log(viewEle.current);
            return <Slider {...slider} key={i} id={i} state={state}></Slider>;
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
        <img src={arrow} alt="arrow right" />
      </button>
    </div>
  );
}

export default SliderContainer;
export { Slider };
