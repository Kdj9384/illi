import React from "react";
import HoverActionBar from "../../components/HoverActionBar";
import "./Qna1.css";

function Qna() {
  return (
    <div className="qna1">
      <HoverActionBar></HoverActionBar>

      <div className="qna1-text">
        <p>
          일리소프트는 모두의 의견과 생각에 대해 적극적으로 경청하겠습니다. 각종
          작업, 프로젝트 문의 및 불편사항들은 본사로 연락주시면 적극 경청 후
          피드백 하겠습니다.
        </p>
      </div>

      <div className="qna1-geo">
        <span>
          일리소프트는 <br></br>어디에
        </span>
        <div>
          <span>
            안산시 상록구 한양대학로 55(사동 ,창업센터) (5공학관 지하)
          </span>
          <div> 지도 </div>
        </div>
      </div>

      <div className="qna1-contact">
        <span>
          일리소프트는 <br></br>어디로
        </span>
        <div>
          <span> 이미지 </span>
          <span>010-4345-7940</span>
          <span> 이미지 </span>
          <span>illisoftofficial@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Qna;
