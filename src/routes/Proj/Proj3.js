import React from "react";
import { HoverActionBar2 } from "../../components/HoverActionBar";

import proj3 from "../../images/proj3.jpg";
import "./Proj3.css";

function Proj() {
  return (
    <div className="proj3">
      <HoverActionBar2
        img={proj3}
        width="1300px"
        height="210px"
        bfcnt="기타 활동"
        cnt="일리소프트의 사회 공헌 및 인류사회의 평화실현을 위한 또다른 도전"
      ></HoverActionBar2>

      <div className="proj3-text">
        <span>일리소프트의 또다른 도전</span>
        <p>
          일리소프트는 인터랙션 교육 컨텐츠 개발의 선구로 자리를 잡아왔습니다.{" "}
          <br></br>
          인터랙션 교육 컨텐츠 이외에도 일리소프트는 인류 사회에 공헌하고 평화를
          실현하고자 많은 도전을 해오고 있습니다.
        </p>
      </div>

      <div className="proj3-box"></div>
    </div>
  );
}

export default Proj;
