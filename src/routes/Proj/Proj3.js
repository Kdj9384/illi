import React from "react";
import HoverActionBar from "../../components/HoverActionBar";
import "./Proj3.css";

function Proj() {
  return (
    <div className="proj3">
      <HoverActionBar></HoverActionBar>

      <div className="proj3-text">
        <span>일리소프트의 또다른 도전</span>
        <p>
          일리소프트는 인터랙션 교육 컨텐츠 개발의 선구로 자리를 잡아왔습니다.
          인터랙션 교육 컨텐츠 이외에도 일리소프트는 인류 사회에 공헌하고 평화를
          실현하고자 많은 도전을 해오고 있습니다.
        </p>
      </div>

      <div className="proj3-box"></div>
    </div>
  );
}

export default Proj;
