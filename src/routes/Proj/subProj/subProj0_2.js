import React from "react";
import { HoverActionBar2 } from "../../../components/HoverActionBar";
import { Link } from "react-router-dom";

import ProjImage from "../../../images/project.jpeg";
import unity from "../../../images/unity.png";
import unity2 from "../../../images/unity2.png";
import unity3 from "../../../images/unity3.png";

import teaching from "../../../images/teaching.jpg";

import "./subProj0_2.css";

function SubProj0_2() {
  const contents1 =
    "4차산업 혁명에 발맞추어 현재 자라나는 아이들에게 가장 필요한 기술은 프로그래밍을 비롯한 여러 4차산업 관련 기술들입니다.| 그 중 가장 많이 사용되고 접근성이 쉬운 AR(증강현실), VR(가상현실)과 관련된 기술은 그 가치가 높습니다.| 일리소프트는 융합인재의 양성을 위해 저희가 가진 기술을 바탕으로 AR, VR 콘텐츠 제작에 관한 강의를 진행합니다.";
  const contents2 =
    "중급자를 대상으로 한 강의입니다. 프로그래밍에 대한 이해도가 부족한 학생들에게 적합하지 않을 수 있습니다.| 프로그래밍에 대한 기본적인 이해도가 필요하며, 15세 이상 학생들에게 적합한 수준입니다.";
  return (
    <div className="subProj0_2">
      <HoverActionBar2
        img={ProjImage}
        width="1300px"
        height="210px"
        bfcnt="진행중인 프로젝트"
        cnt="현재 일리소프트의 인재들이 최선을 다하고 있는 프로젝트를 소개합니다."
      ></HoverActionBar2>

      <span>중급자 대상 AR, VR 콘텐츠 제작 강의</span>
      {contents1.split("|").map((line, i) => {
        return (
          <span key={i}>
            {line}
            <br></br>
          </span>
        );
      })}
      <br></br>
      {contents2.split("|").map((line, i) => {
        return (
          <span key={i}>
            {line}
            <br></br>
          </span>
        );
      })}

      <hr style={{ width: "100%" }}></hr>

      {/* <div className="subProj0_2-div1"> */}
      <span>강의 개요</span>
      <img src={unity} alt="" />
      <p>
        중급자 대상 AR, VR 콘텐츠 제작 강의는 게임 개발툴인 'Unity 3D'를 통해
        개발됩니다. <br></br>
        Unity 3D 에 대한 이해를 비롯하여 일리소프트의 강사들이 직접 공모전에
        참가 및 개발한 게임들을 같이 만듭니다. <br></br>
        <br></br>
        강의 형태는 현장 강의, 온라인 실시간 강의, 녹화 강의로 수강이
        가능합니다.
      </p>
      <button>
        <Link to="apply-class">온라인 강의 신청</Link>
      </button>
      <br></br>
      <span id="sub0_2-gray">
        * 현재는 COVID-19 바이러스로 인해 현장 강의는 제한되어 있습니다.
      </span>
      {/* </div> */}

      {/* <div className="subProj0_2-div2"> */}
      <span className="sub0_2-title">강사 경력</span>
      <span>- 한양대학교 교수학습 지원센터 온라인강의 3D게임개발 총괄</span>
      <span>- knowledge studio 게임제작과 VR/AR 환경 개발 강의 총괄</span>
      <img src={teaching} alt="" />
      <span>- 2019 전국 어플리케이션 개발대회 수상</span>
      <img src={unity2} alt="" />
      <span>- 국제대학생VR 컨텐츠 제작 프로젝트참여</span>
      <img src={unity3} alt="" />
      {/* </div> */}
    </div>
  );
}

export default SubProj0_2;
