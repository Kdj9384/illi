import React from "react";
import AppCss from "./Slider.module.css";
import testimg from "../images/haedong.jpg";

function Slider({ newsCont }) {
  return (
    <ul className={AppCss.Slider}>
      <li>
        <div className={AppCss.blackOverlay}>
          <img src={newsCont.img} alt="slider images" />
        </div>
        <p className={AppCss.titleText}>{newsCont.title}</p>
        <p className={AppCss.contentText}>{newsCont.explain}</p>
      </li>
    </ul>
  );
}

export default Slider;
