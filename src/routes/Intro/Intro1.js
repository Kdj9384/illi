import React, { useEffect } from "react";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
import { ChangeNavColor } from "../../hooks/ChangeNavColor";

import "./Intro1.css";

function Intro({ match, location }) {
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

  return (
    <div className="intro1">
      <div>상단 카드</div>

      <div>일리소프트 철학</div>

      <div> 그리드 카드 </div>
    </div>
  );
}

export default withRouter(Intro);
