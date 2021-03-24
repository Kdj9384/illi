import React from "react";
import { HoverActionBar2 } from "../../components/HoverActionBar";

import employ from "../../images/employ.jpg";
import "./Qna2.css";

function Qna() {
  return (
    <div className="qna2">
      <HoverActionBar2
        img={employ}
        width="1300px"
        height="210px"
        bfcnt="채용 정보"
        cnt="한국 인터랙션 교육을 이끌어갈 일리소프트의 새로운 인재를 찾습니다! "
      ></HoverActionBar2>

      <div className="qna2-text">
        <span>인터랙션 교육을 이끌어갈 파트너를 찾습니다. </span>
        <p>
          일리소프트는 인터랙션 교육 컨텐츠 개발을 필두로 각종 4차산업 및 IT
          관련 교육을 주관하는 기업입니다. <br></br> 창의융합인재 양성과 사회
          공헌을 위해 최선을 다하고 있으며, 우리와 같은 가치를 가진 인재분들을
          찾고 있습니다.<br></br> 우리와 뜻을 함께하여 새로운 분야를 개척해
          나가고 싶으시다면 일리소프트의 문을 두드려주세요.
        </p>
      </div>
    </div>
  );
}

export default Qna;
