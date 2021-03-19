import React from "react";
import HoverActionBar, {
  HoverActionBar2,
} from "../../components/HoverActionBar";

import ProjImage from "../../images/project.jpeg";
import teaching from "../../images/teaching.jpg";
import ARcontents from "../../images/ARcontents.jpg";

import "./Proj1.css";

function Proj({ match, location }) {
  console.log(match);
  console.log(location);
  return (
    <div className="proj1">
      <HoverActionBar2
        img={ProjImage}
        width="1300px"
        height="210px"
        bfcnt="진행중인 프로젝트"
        cnt="현재 일리소프트의 인재들이 최선을 다하고 있는 프로젝트를 소개합니다."
      ></HoverActionBar2>

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
      <div className="proj1-container">
        <HoverActionBar
          img={teaching}
          cnt="AR 콘텐츠를 통한|언플러그드 학습"
          id="0"
        ></HoverActionBar>
        <HoverActionBar
          img={ARcontents}
          cnt="중급자 대상|AR, VR 콘텐츠 제작 강의"
          id="1"
        ></HoverActionBar>
        <HoverActionBar
          img={teaching}
          cnt="AR 콘텐츠를 통한|언플러그드 학습"
          id="0"
        ></HoverActionBar>
      </div>
    </div>
  );
}

export default Proj;
