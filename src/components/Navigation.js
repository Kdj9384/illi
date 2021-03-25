import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useHoverLogo from "../hooks/useHover";
import { ChangeNavColor } from "../hooks/ChangeNavColor";

import "./Navigation.css";

function Navigation() {
  const onHoverLogoAction = useHoverLogo();
  const { changeState, stateChild, state, changeSubState } = ChangeNavColor();

  const nav_menu = [
    {
      id: 0,
      child: [],
      path: "",
    },
    {
      id: 1,
      cnt: "기업소개",
      child: ["일리철학", "일리소식", "일리미래"],
      path: "illi-intro",
    },
    {
      id: 2,
      cnt: "프로젝트",
      child: ["진행중인 프로젝트", "완료된 프로젝트", "기타 활동"],
      path: "illi-proj",
    },
    {
      id: 3,
      cnt: "문의사항",
      child: ["문의사항", "채용정보"],
      path: "illi-qna",
    },
  ];

  return (
    <nav>
      <div className="nav-container">
        {/* routing logo */}
        <div className="nav-container-logo">
          <Link
            className="nav-button"
            to="/"
            // {...onHoverLogoAction}
            onClick={(event) => {
              changeState(nav_menu[0], event);
              changeSubState(0);
            }}
          >
            일리 소프트
          </Link>
        </div>

        {/* main nav bar*/}
        <ul className="nav-container-navs">
          {/* # 라우팅시 정상, url을 직접입력시 제대로 출력되지 않는 점 수정 필요(리다이렉트)*/}
          <li>
            <Link
              className="nav-button"
              to={{ pathname: "/illi-intro/0", state: { id: 0 } }}
              onClick={(event) => {
                changeState(nav_menu[1], event);
                changeSubState(0);
              }}
            >
              {nav_menu[1].cnt}
            </Link>
          </li>
          <li>
            <Link
              className="nav-button"
              to="/illi-proj/0"
              onClick={(event) => {
                changeState(nav_menu[2], event);
                changeSubState(0);
              }}
            >
              {nav_menu[2].cnt}
            </Link>
          </li>
          <li>
            <Link
              className="nav-button"
              to="/illi-qna/0"
              onClick={(event) => {
                changeState(nav_menu[3], event);
                changeSubState(0);
              }}
            >
              {nav_menu[3].cnt}
            </Link>
          </li>

          {/* rendering sub nav bar */}
          <ul className="nav-bar-sub">
            <div >
            {stateChild.map((child, index) => {
              if (index == 2) {
                return (
                  <li key={index}>
                    <Link
                      className="nav-button-sub"
                      to={{
                        pathname: `/${nav_menu[state].path}/${index}`,
                        state: { id: index },
                      }}
                      onClick={() => changeSubState(index)}
                    >
                      {child}
                    </Link>
                  </li>
                );
              } else {

                return (
                  <li key={index}>
                    <Link
                      className="nav-button-sub"
                      to={{
                        pathname: `/${nav_menu[state].path}/${index}`,
                        state: { id: index },
                      }}
                      onClick={() => changeSubState(index)}
                    >
                      {child}
                    </Link>
                  </li>
                );
              }
            })}
            </div>
          </ul>
        </ul>

        {/* facebook icon */}
        <ul className="nav-container-icons">
          <li>
            <a href="https://www.facebook.com/iLLiSoft/">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC-k-dVuRwgf7OuIU5D8-54w">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/illisoftware2020_korea/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
