import React from "react";
import HoverActionBar, {
  HoverActionBar2,
  HoverActionBar3,
} from "../../../components/HoverActionBar";
import { Minorslide } from "../../../components/Proj2Slide";

import gamejamlogo from "../../../images/gamejamlogo.png";
import gamejam from "../../../images/gamejam.png";

import "./subProj1.css";

function SubProj1() {
  const text1 =
    "COVID-19 바이러스로 인한 언택트 사회에서 학생들의 역량 및 개발 능력을 가꾸기 위한 동기부여로써,| GameJam 대회가 2020년에 새롭게 바뀌었습니다.| 언택트 시대에 걸맞게 모든 대회의 진행은 온라인으로 진행되며 성과로 학과장 등을 수여하였습니다.";
  const text2 =
    "본 행사는 한양대학교와 일리소프트가 공동 기획 및 진행을 맡았습니다.|2020년까지 총 3회의 대회가 진행되었으며 많은 고등학생, 대학생 분들의참여로 매 회 성공적으로 이뤄졌습니다.| 아래에서 GameJam 개최 모집요강, 진 사진 및 공식사이트 접속이 가능합니다.";
  return (
    <div className="subProj1">
      <HoverActionBar3
        width="1300px"
        height="210px"
        cnt="일리소프트 및 한양대학교 주관|학생 게임 개발 대회"
        img={gamejamlogo}
      ></HoverActionBar3>

      <div className="subProj1-body">
        <span className="subProj1-body-title1">
          온라인 게임 개발 대회, Summer GameJam
        </span>
        {text1.split("|").map((line, i) => {
          return (
            <span key={i} className="subProj1-contents">
              {" "}
              {line} <br></br>
            </span>
          );
        })}
        <br></br>
        {text2.split("|").map((line, i) => {
          return (
            <span key={i} className="subProj1-contents">
              {" "}
              {line} <br></br>
            </span>
          );
        })}

        <span className="subProj1-body-title2">GameJam 진행 사진</span>
        <Minorslide></Minorslide>
        <span className="subProj1-body-title3">
          2020 Summer GameJam 모집 요강 안내
        </span>
        <img src={gamejam} alt="gamejam" />
        <button>GameJam &#10140;</button>
      </div>
    </div>
  );
}

export default SubProj1;
