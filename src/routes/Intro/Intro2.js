import React, { useState, useEffect } from "react";
import { HoverActionBar2 } from "../../components/HoverActionBar";
import Slider from "../../components/Slider";
import firebase from '../../firebase';

import intro2 from "../../images/intro2.jpg";
import "./Intro2.css";

function Intro({ match, location }) {
  const [newsList, setNewsList] = useState();
  useEffect(() => {
    const  newsRef = firebase.database().ref('news');
    newsRef.on('value', (snapshot) => {
      const news = snapshot.val();
      const newsList = [];
      for(let id in news){
        newsList.push(news[id]);
      }
      console.log(newsList);
      setNewsList(newsList);
  });
  }, []);
  return (
    <div className="intro2">
      <HoverActionBar2
        img={intro2}
        width="1300px"
        height="210px"
        bfcnt="일리 소식"
        cnt="일리소프트는 사회적 가치를 위해 최선을 다하겠습니다."
      ></HoverActionBar2>

      <div className="intro2-display-block">
        <div className="intro2-grid-container">
          {newsList ? newsList.map((news, index) => <Slider newsCont={news}/>) : ''}
        </div>
      </div>
    </div>
  );
}

export default Intro;
