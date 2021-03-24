import React from "react";
import { HoverActionBar2 } from "../../components/HoverActionBar";
import Mapbox from "../../components/Mapbox";

import calling from "../../images/calling.jpg";
import "./Qna1.css";
import HoverActionBar from "../../components/HoverActionBar";

function Qna() {
  return (
    <div className="qna1">
      <HoverActionBar2
        img={calling}
        width="1300px"
        height="210px"
        bfcnt="문의 사항"
        cnt="부담없이 연락주세요! 귀를 활짝 열고 기다리겠습니다."
      ></HoverActionBar2>

      <div className="qna1-text">
        <p>
          일리소프트는 모두의 의견과 생각에 대해 적극적으로 경청하겠습니다.{" "}
          <br></br>각종 작업, 프로젝트 문의 및 불편사항들은 본사로 연락주시면
          적극 경청 후 피드백 하겠습니다.
        </p>
      </div>

      <div className="qna1-bottom">
        <div className="qna1-geo">
          <span>
            일리소프트는 <br></br>
            <strong>어디에</strong>
          </span>
          <div>
            <span>
              안산시 상록구 한양대학로 55(사동 ,창업센터) (5공학관 지하)
            </span>
            <Mapbox></Mapbox>
          </div>
        </div>

        <div className="qna1-contact">
          <span>
            일리소프트는 <br></br> <strong>어디로</strong>
          </span>
          <div>
            <span>010-4345-7940</span>
            <br></br>
            <span>illisoftofficial@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qna;
