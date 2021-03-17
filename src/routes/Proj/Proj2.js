import React from "react";
import HoverActionBar from "../../components/HoverActionBar";
import "./Proj2.css";

function Proj() {
  return (
    <div className="proj2">
      <HoverActionBar></HoverActionBar>

      <div className="proj2-text">
        <span>일리소프트의 일리있던 이야기 </span>
        <p>
          일리소프트에서 진행했던 각종 프로젝트들에 대해 소개합니다.
          일리소프트는 모든 프로젝트마다 열정을 쏟아부었으며, 그마다 일리있는
          목적을 녹였습니다. 모든 프로젝트들은 우리의 이익만을 추구하지 않고
          사회적으로 헌신하고 인재양성을 위한 가치를 담아왔고 실천해왔습니다.
          우리가 해온 일리있는 이야기들을 한번 들어보시겠어요?
        </p>
      </div>

      <div>
        <div></div>
        <div></div>
        <button></button>
      </div>
    </div>
  );
}

export default Proj;
