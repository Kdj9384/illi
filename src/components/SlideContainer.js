// 콘텐츠 인덱스 제공
import React, { useRef, useState, useEffect } from "react";
import AppCss from "./SlideContainer.module.css";
import testimg from "../images/haedong.jpg";
import arrow from "../images/next.png";
import Slider from "./Slider.js";
import firebase from '../firebase';

import blackCover from "../images/blackCover.png";

function StateBuilder() {
  const [state, setState] = useState(0);
  const [dist, setDist] = useState(0);
  return { state, setState, dist, setDist };
}

function SliderContainer({newsBox}) {
  const viewEle = useRef();

  const sliders = [
    { cnt: "일리 소프트", img: { testimg } },
    { cnt: "일리 소프트", img: { testimg } },
    { cnt: "일리 소프트", img: { testimg } },
    { cnt: "일리 소프트", img: { testimg } },
    { cnt: "일리 소프트", img: { testimg } },
    { cnt: "일리 소프트", img: { testimg } },
    { cnt: "일리 소프트", img: { testimg } },
    { cnt: "일리 소프트", img: { testimg } },
  ];
  const indicators = [0, 1, 2];

  const { state, setState, dist, setDist } = StateBuilder();

  const indicators_style = {
    backgroundColor: "black",
  };
  const styles = {
    transform: `translate(${dist}px, 0px)`,
    transition: "0.3s",
  };

  const [newsList, setNewsList] = useState();
  useEffect(() => {
    const  newsRef = firebase.database().ref('news');
    newsRef.on('value', (snapshot) => {
      const news = snapshot.val();
      const newsList = [];
      for(let id in news){
        newsList.push(news[id]);
      }
      console.log(newsList);
      setNewsList(newsList);
  });
  }, []);


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
      {/* viewEle.current.offsetWidth */}
      <button onClick={() => AniFunc(380 * 3, -1)}>
        <img
          src={arrow}
          alt="arrow left"
          style={{ transform: "rotate(180deg)" }}
        />
      </button>

      <div className={AppCss.view} ref={viewEle}>
        <div className={AppCss.absolutecontainer} style={styles}>
          {newsList ? newsList.map((news, index) => <Slider newsCont={news}/>) : ''}
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

      <button onClick={() => AniFunc(-380 * 3, 1)}>
        <img src={arrow} alt="arrow right" />
      </button>
    </div>
  );
}

export default SliderContainer;
export { Slider };
