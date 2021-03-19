import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import HABcss from "./HoverActionBar.module.css";
import blackCover from "../images/blackCover.png";
import { Link } from "react-router-dom";

function HoverActionBar({ width, height, cnt, img, style, id }) {
  return (
    <Link to={`/illi-proj/0/${id}`}>
      <div
        className={HABcss.hoveractionbar}
        style={{
          backgroundImage: `url(${img})`,
          height: height,
          width: width,
          ...style,
        }}
      >
        <img src={blackCover} alt="Teaching" />
        <p className={HABcss.cnt}>
          {cnt.split("|").map((line, index) => {
            return (
              <span key={index}>
                {line} <br />
              </span>
            );
          })}
        </p>
      </div>
    </Link>
  );
}

function HoverActionBar2({ width, height, bfcnt, cnt, img }) {
  return (
    <div
      className={HABcss.hoveractionbar2}
      style={{ backgroundImage: `url(${img})`, height: height, width: width }}
    >
      <p className={HABcss.bfcnt2} style={{ width: width, height: height }}>
        {bfcnt}
      </p>
      <img src={blackCover} alt="Teaching" />
      <p className={HABcss.cnt2} style={{ width: width, height: height }}>
        {cnt}
      </p>
    </div>
  );
}

function HoverActionBar3({ width, height, cnt, img, style }) {
  return (
    <div
      className={HABcss.hoveractionbar3}
      style={{
        backgroundImage: `url(${img})`,
        height: height,
        width: width,
        ...style,
      }}
    >
      <img src={blackCover} alt="Teaching" />
      <p className={HABcss.cnt3}>
        {cnt.split("|").map((line, index) => {
          return (
            <span key={index}>
              {line} <br />
            </span>
          );
        })}
      </p>
    </div>
  );
}

HoverActionBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  cnt: PropTypes.string.isRequired,
};

HoverActionBar.defaultProps = {
  width: 1200,
  height: 224,
  cnt: "일리 소프트",
  style: null,
};

export default HoverActionBar;
export { HoverActionBar2, HoverActionBar3 };
