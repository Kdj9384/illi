import React from "react";
import PropTypes from "prop-types";
import HABcss from "./HoverActionBar.module.css";
import blackCover from "../images/blackCover.png";

export default function HoverActionBar({ width, height, cnt }) {
  return (
    <div className={HABcss.hoveractionbar}>
      <img src={blackCover} alt="Teaching" />
      <p>
        AR 콘텐츠를 통한 <br></br> 언플러그드 학습
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
  width: 1582,
  height: 284,
  cnt: "일리 소프트",
};
