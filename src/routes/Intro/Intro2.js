import React from "react";
import HoverActionBar from "../../components/HoverActionBar";
import Slider from "../../components/Slider";
import "./Intro2.css";

function Intro({ match, location }) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <div className="intro2">
      <HoverActionBar></HoverActionBar>

      <div className="intro2-display-block">
        <span> 디스플레이 설정 </span>
        <div className="intro2-grid-container">
          {items.map((item, index) => {
            return (
              <Slider key={index} cnt={item}>
                hu
              </Slider>
            );
          })}
        </div>
      </div>

      <div className="intro2-bottom-block">이동 + 인풋 블록</div>
    </div>
  );
}

export default Intro;
