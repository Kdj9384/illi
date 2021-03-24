import React from "react";
import { HoverActionBar2 } from "../../components/HoverActionBar";
import Slider from "../../components/Slider";

import intro2 from "../../images/intro2.jpg";
import "./Intro2.css";

function Intro({ match, location }) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <div className="intro2">
      <HoverActionBar2
        img={intro2}
        width="1300px"
        height="210px"
        bfcnt="일리 소식"
        cnt="일리소프트는 사회적 가치를 위해 최선을 다하겠습니다."
      ></HoverActionBar2>

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
