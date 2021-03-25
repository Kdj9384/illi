import React, { useState, useEffect } from "react";
import { HoverActionBar2 } from "../../components/HoverActionBar";
import firebase from '../../firebase';

import intro3 from "../../images/intro3.jpg";
import "./Intro3.css";

function Intro({ match, location }) {
  const [introPicList, setintroPicList] = useState();

  useEffect(() => {
    const  introPicRef = firebase.database().ref('intro_img');
    introPicRef.on('value', (snapshot) => {
      const introPics = snapshot.val();
      const introPicList = [];
      for(let id in introPics){
        introPicList.push(introPics[id]);
      }
      console.log(introPicList);
      setintroPicList(introPicList);
  });
  }, []);
  return (
    <div className="intro3">
      <HoverActionBar2
        img={intro3}
        width="1300px"
        height="210px"
        bfcnt="일리 미래"
        cnt="사회적 공헌 및 융합인재 양성을 위해 일리있는 목표를 제시하겠습니다."
      ></HoverActionBar2>
      <div className="proj1-text">
        <span>일리소프트의 비전 </span>
        <p>
          4차산업 혁명과 함께 펼쳐질 미래에 걸맞는 창의융합인재 양성을 위해 양질의 교육을 제공하도록 최선을 다하겠습니다.
        </p>
        <span>
        4차산업혁명은 역사적으로 중요했던 산업혁명 중 하나에 더해지면서 세계적으로 큰 변화를 가져왔습니다. 이에 더이상 과거처럼 한 가지 분야, 하나의 기술로는 급변하는 미래사회에 발맞추기 힘들어졌습니다. 일리소프트는 이러한 변화의 흐름에 맞춰 앞으로 대한민국 및 세계를 이끌어나갈 미래의 인재를 양성하겠습니다.
        </span>
      </div>
      <div className="intro3_imgs">
        {introPicList ? introPicList.map((introPics) => <img src = {introPics}/>) : ''}
      </div>
    </div>
  );
}

export default Intro;
