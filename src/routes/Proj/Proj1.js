import React from "react";
import HoverActionBar from "../../components/HoverActionBar";
import "./Proj1.css";

function Proj({ match, location }) {
  console.log(match);
  console.log(location);
  return (
    <div className="proj1">
      <HoverActionBar></HoverActionBar>

      <div className="proj1-text">
        <span>일리소프트의 프로젝트는 </span>
        <p>
          누구나 접근하고 사용하기 쉬운 컨텐츠의 제작을 위해 많은 일리의
          인재들이 연구하고 개발합니다. 아래 프로젝트들은 현재 일리소프트에서
          진행중에 있는 프로젝트들입니다. 사회에 공헌하고자 하는 일리소프트의
          철학으로, 진행중인 프로젝트들을 깨끗하게 공개합니다.
        </p>
        <span>
          * 특정 프로젝트들은 보안문제 등으로 공개가 제한될 수 있습니다.
        </span>
      </div>
      <HoverActionBar></HoverActionBar>
      <HoverActionBar></HoverActionBar>
      <HoverActionBar></HoverActionBar>
    </div>
  );
}

export default Proj;
