import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
import { HoverActionBar2 } from "../../components/HoverActionBar";
import firebase from '../../firebase';
import PhilBox from '../../box/imgBox';

import illicover from "../../images/illicover.jpg";
import "./Intro1.css";

function Intro({ match, location }) {
  const [philList, setPhilList] = useState();

  const history = useHistory();
  useEffect(() => {
    // Check Valid access
    console.log(location);
    if (location.state === undefined) {
      console.log("undefined path");
      history.push("/");
      return;
    } else {
      console.log("Valid Way");
    }
  }, []);
  useEffect(() => {
    const  philRef = firebase.database().ref('philosophy');
    philRef.on('value', (snapshot) => {
      const phils = snapshot.val();
      const philList = [];
      for(let id in phils){
        philList.push(phils[id]);
      }
      console.log(philList);
      setPhilList(philList);
  });
  }, []);

  return (
    <div className="intro1">
      <HoverActionBar2
        img={illicover}
        width="1300px"
        height="210px"
        bfcnt="일리"
        cnt="[명사] 어떤 면에서 그런대로 타당하다고 생각되는 이치"
      ></HoverActionBar2>

      <div className="intro1-text">
        <span>일리소프트의 철학</span>
        <p>
          일리소프트는 '일리있다'는 표현처럼, 일리있는 교육 컨텐츠를 만들자는
          생각으로 시작하였습니다. 자본을 위한 컨텐츠 제작이 아닌, 사회공헌과
          국가발전에 이바지하며 융합인재양성을 위한 이유 있고 타당한 컨텐츠를
          만들고자 하는 것이 핵심 철학입니다. 이에 아래 4개의 핵심가치를
          바탕으로 인재양성을 위한 양질의 컨텐츠 제작을 목표로 하겠습니다.
        </p>
        <span> &#60; 마우스를 올려 확인해 보세요! &#62;</span>
      </div>

      <div className="intro1-grid-container">
        {philList ? philList.map((phils, index) => <PhilBox philCont={phils}/>) : ''}
      </div>
    </div>
  );
}

export default withRouter(Intro);
