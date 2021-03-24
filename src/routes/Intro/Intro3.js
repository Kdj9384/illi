import React from "react";
import { HoverActionBar2 } from "../../components/HoverActionBar";

import intro3 from "../../images/intro3.jpg";

function Intro({ match, location }) {
  return (
    <div className="intro3">
      <HoverActionBar2
        img={intro3}
        width="1300px"
        height="210px"
        bfcnt="일리 미래"
        cnt="사회적 공헌 및 융합인재 양성을 위해 일리있는 목표를 제시하겠습니다."
      ></HoverActionBar2>
    </div>
  );
}

export default Intro;
