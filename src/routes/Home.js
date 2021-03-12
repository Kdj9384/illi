import React from "react";
import SlideShow from "../components/useSlideShow";
import HoverActionBar from "../components/HoverActionBar";
import illiMain from "../images/illiMain.png";

import "./Home.css";
function Homebutton({ content }) {
  return <button>{content}</button>;
}
function Home() {
  const newsData = [
    { img: "", title: "1", contents: "11" },
    { img: "", title: "2", contents: "22" },
    { img: "", title: "3", contents: "33" },
    { img: "", title: "4", contents: "44" },
    { img: "", title: "5", contents: "55" },
  ];
  const projData = [
    { img: "", title: "언플러그드 학습", contents: "11" },
    { img: "", title: "제작 강의", contents: "22" },
    { img: "", title: "언플러그드 학습", contents: "33" },
  ];

  console.log("home rendering");
  return (
    <div className="home-root">
      <div className="home-topcard">
        <img src={illiMain} alt="Illi Main" />
      </div>
      <Homebutton content="일리소프트 소식"></Homebutton>
      <div className="home-news">
        <SlideShow></SlideShow>
      </div>
      <Homebutton content="진행중인 프로젝트"></Homebutton>
      <div className="home-proj">
        <div>
          {projData.map((data, i) => {
            return (
              <HoverActionBar
                key={i}
                width={1582}
                height={284}
                cnt={"일리 소프트"}
              ></HoverActionBar>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// To Do
//

export default Home;
