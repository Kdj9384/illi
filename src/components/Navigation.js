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
      child: ["프로젝트1", "프로젝트2", "프로젝트3"],
      path: "illi-proj",
    },
    {
      id: 3,
      cnt: "문의사항",
      child: ["문의사항1", "문의사항2"],
      path: "illi-qna",
    },
  ];

  return (
    <nav>
      <div className="nav-container">
        {/* routing logo */}
        <div className="nav-container-logo">
          <span>
            <Link
              className="nav-button"
              to="/"
              {...onHoverLogoAction}
              onClick={(event) => {
                changeState(nav_menu[0], event);
                changeSubState(0);
              }}
            >
              일리 소프트
            </Link>
          </span>
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
            {stateChild.map((child, index) => {
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
            })}
          </ul>
        </ul>

        {/* facebook icon */}
        <ul className="nav-container-icons">
          <li>
            <i className="fab fa-facebook"></i>
          </li>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
