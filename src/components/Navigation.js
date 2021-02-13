import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  const nav_menu = [
    {
      id: 1,
      cnt: "기업소개",
      child: ["일리철학", "일리소식", "일리미래"],
    },
    {
      id: 2,
      cnt: "프로젝트",
      child: ["프로젝트1", "프로젝트2", "프로젝트3"],
    },
    {
      id: 3,
      cnt: "문의사항",
      child: ["문의사항1", "문의사항2", "문의사항3"],
    },
  ];
  return (
    <nav className="nav-container">
      <div className="nav-container-logo">
        <span>
          <Link to="/">일리 소프트</Link>
        </span>
      </div>

      {/* 1. 자바 스크립트로 이벤트 주기, 2. 리액트 이벤트 찾기 */}
      <ul className="nav-container-navs">
        <li>
          {/* 클릭시 화면전환 + 세부 네비게이션 등장 */}
          {/* # 라우팅시 정상, url을 직접입력시 제대로 출력되지 않는 점 수정 필요(리다이렉트)*/}
          {/* # nav_menu의 child 를 넘겨주고 각 컴포넌트에서 처리 */}
          <Link to="/illi-intro">{nav_menu[0].cnt}</Link>
        </li>
        <li>
          <Link to="/illi-proj">{nav_menu[1].cnt}</Link>
        </li>
        <li>
          <Link to="/illi-qna">{nav_menu[2].cnt}</Link>
        </li>
      </ul>

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
    </nav>
  );
}

export default Navigation;
