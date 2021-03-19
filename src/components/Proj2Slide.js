import React, { useState } from "react";
import { Link } from "react-router-dom";

import gamejam from "../images/gamejam.png";
import Proj22 from "../images/Proj22.png";
import ARcontents from "../images/ARcontents.jpg";
import arrow from "../images/next.png";
import g1 from "../images/gj1.png";
import g2 from "../images/gj2.png";
import g3 from "../images/gj3.png";

import "./Proj2Slide.css";

function Proj2Slide() {
  const [page, setPage] = useState(0);
  const slides = [
    {
      id: 0,
      title: "온라인 게임 개발 대회 진행 및 운영",
      contents:
        "언택트 시대에 걸맞게 게임 개발 대회를 온라인으로 진행하고 | 학과장 등을 수여하는 대회입니다.",
      url: "",
    },
    {
      id: 1,
      title: "VR을 이용한 게이밍 소설 프로젝트",
      contents:
        "국제대학교 VR컨텐츠 제작 프로젝트로|소설을 게임으로 즐기며 가상현실을 통해 구현해냈습니다.",
      url: "",
    },
    {
      id: 2,
      title: "유아동 코딩 교육 '일리있는 아동 코딩수업'",
      contents:
        "7세 전후의 유아동에 대해 어려운 코딩에 대한 개념을 쉽게 강연했습니다.| 아이들이 4차산업에 관한 내용을 쉽고 재미있게 설명하고 체험할 수 있었습니다.| 강연에 대한 비용은 무료였으며 기타 수익은 모두 기부되었습니다.",
      url: "",
    },
  ];

  function clickAct(n) {
    const len = slides.length;
    if (page + n >= len) {
      setPage(0);
    } else if (page + n < 0) {
      setPage(len - 1);
    } else {
      setPage(page + n);
    }
  }

  const styles = {
    transform: `translate(${-600 * page}px, 0px)`,
    transition: "0.3s",
  };

  return (
    <div className="Proj2Slide">
      <div className="Proj2Slide-container">
        <div className="Proj2Slide-slide-wrapper">
          <button
            onClick={() => {
              clickAct(-1);
            }}
          >
            <img
              src={arrow}
              alt="arrow left"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <div className="Proj2Slide-view">
            <div style={styles}>
              <img src={gamejam} alt="게임 잼" />
              <img src={Proj22} alt="게이밍 소설 프로젝트" />
              <img src={ARcontents} alt="아동 교육 프로젝트" />
            </div>
          </div>
          <button
            onClick={() => {
              clickAct(1);
            }}
          >
            <img src={arrow} alt="arrow right" />
          </button>
        </div>
      </div>
      <div className="Proj2Slide-text">
        <span>{slides[page].title}</span>
        {slides[page].contents.split("|").map((line, i) => {
          return (
            <span key={i}>
              {line} <br></br>
            </span>
          );
        })}
        <button>
          <Link to="/illi-proj/1/0">프로젝트 보기</Link>
        </button>
      </div>
    </div>
  );
}

function Minorslide() {
  const [page, setPage] = useState(0);
  const styles = {
    transform: `translate(${-600 * page}px, 0px)`,
    transition: "0.3s",
  };
  const slides = [{ g1, g2, g3 }];

  function clickAct(n) {
    const len = 3;
    if (page + n >= len) {
      setPage(0);
    } else if (page + n < 0) {
      setPage(len - 1);
    } else {
      setPage(page + n);
    }
  }
  return (
    <div className="minorslide">
      <button
        onClick={() => {
          clickAct(-1);
        }}
      >
        <img
          src={arrow}
          alt="arrow left"
          style={{ transform: "rotate(180deg)" }}
        />
      </button>
      <div className="minorslide-view">
        <div style={styles}>
          <img src={g1} alt="게임 잼" />
          <img src={g2} alt="게이밍 소설 프로젝트" />
          <img src={g3} alt="아동 교육 프로젝트" />
        </div>
      </div>
      <button
        onClick={() => {
          clickAct(1);
        }}
      >
        <img src={arrow} alt="arrow right" />
      </button>
    </div>
  );
}

export default Proj2Slide;
export { Minorslide };
