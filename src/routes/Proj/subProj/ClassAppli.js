import React from "react";
import { HoverActionBar2 } from "../../../components/HoverActionBar";
import ProjImage from "../../../images/project.jpeg";

function ClassAppli() {
  return (
    <div>
      <HoverActionBar2
        img={ProjImage}
        width="1300px"
        height="210px"
        bfcnt="진행중인 프로젝트"
        cnt="현재 일리소프트의 인재들이 최선을 다하고 있는 프로젝트를 소개합니다."
      ></HoverActionBar2>

      <span style={{ textAlign: "center" }}>준비 중입니다...</span>
    </div>
  );
}

export default ClassAppli;
