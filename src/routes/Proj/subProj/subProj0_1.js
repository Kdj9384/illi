import React from "react";
import { HoverActionBar2 } from "../../../components/HoverActionBar";
import ProjImage from "../../../images/project.jpeg";
import worky1 from "../../../images/worky1.png";
import worky2 from "../../../images/worky2.png";

import "./subProj0_1.css";

function SubProj0_1() {
  const text =
    "코딩에 관한 기초 지식, 기초 과학 등을 일리소프트에서 자체 개발한 AR콘텐츠를 통해 스스로 학습하며 이해할 수 있는 컨텐츠를 개발합니다.| 최근 코로나-19 바이러스로 인해 각종 실습 및 대면수업이 제한되면서 아이들의 학습경험이 부족해지고 있습니다.| 이러한 문제를 해결할 수 있는 AR교육 콘텐츠로 부족한 학습 개념의 이해와 기초 학문에 관한 체험학습의 부재를 채워줍니다.";
  return (
    <div className="subProj0_1">
      <HoverActionBar2
        img={ProjImage}
        width="1300px"
        height="210px"
        bfcnt="진행중인 프로젝트"
        cnt="현재 일리소프트의 인재들이 최선을 다하고 있는 프로젝트를 소개합니다."
      ></HoverActionBar2>
      <span className="subProj0_1-title">AR콘텐츠를 통한 언플러그드 학습</span>
      {text.split("|").map((line, i) => {
        return (
          <span key={i}>
            {line}
            <br></br>
          </span>
        );
      })}
      <div className="subProj0_1-block">
        <img src={worky1} alt="worky"></img>
        <div>
          <span>튀어나와요! 스티커북</span>
          <p>
            아이가 스스로하기 어렵거나 위험한 실험들을 <br></br> AR기술을
            이용하여 실험을 진행합니다.
          </p>
        </div>
      </div>
      <hr style={{ width: "100%" }}></hr>
      <div className="subProj0_1-block">
        <img src={worky2} alt="worky"></img>
        <div>
          <span>워키와 함께하는 코딩교실</span>
          <p>
            어려운 코딩에 대한 개념을 로봇 '워키'와 함께 <br></br> 간단하고
            재미있게 코딩을 학습하고 이해합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubProj0_1;
