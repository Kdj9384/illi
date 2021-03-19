import React from "react";
import "./Footer.css";
import illiLogoBack from "../images/illiLogoBack.png";

function Footer() {
  return (
    <footer className="footer-container">
      <span> 5건 이상의 AR, VR, MR 외주용역 개발을 수행하였습니다. </span>
      <span>
        <strong>illisoftofficial@gmail.com</strong>&nbsp;요청하시면 상담
        가능합니다.
      </span>
      <br />

      <span>
        <strong>
          사업장 장소 : 안산시 상록구 한양대학로 55(사동, 창업센터)(5공학관
          지하) &nbsp;&nbsp;
        </strong>
      </span>
      <span>
        <strong>사업자 등록번호 : 734 - 81 - 01722</strong>
      </span>
      <br />

      <span> 대표 전화번호 : 010 - 4345 - 7940 (안호준)&nbsp;&nbsp; </span>
      <span> 공식 이메일 : illisoftofficial@gmail.com </span>
      <br />

      <span>
        각종 행사, 교육진행 문의 : 대표 연락처 또는 이메일로 보내주시면 됩니다.
      </span>
      <br />
      <br />

      <div>
        <img src={illiLogoBack} alt="illi Logo"></img>
      </div>
      <span style={{ color: "gray" }}>
        Copyright © illiSoft Corp. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
