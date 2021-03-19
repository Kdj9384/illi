import React from "react";
import AppCss from "./Slider.module.css";
import testimg from "../images/haedong.jpg";

function Slider({ cnt, img, id, state }) {
  return (
    <ul className={AppCss.Slider}>
      <li>
        <div className={AppCss.blackOverlay}>
          <img src={testimg} alt="slider images" />
        </div>
        <p>{cnt + state}</p>
        <p>일리소프트일리소프트일리소프트일리소프</p>
      </li>
    </ul>
  );
}

export default Slider;
