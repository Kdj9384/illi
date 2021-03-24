import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Intro1 from "./routes/Intro/Intro1";
import Intro2 from "./routes/Intro/Intro2";
import Intro3 from "./routes/Intro/Intro3";

import Proj1 from "./routes/Proj/Proj1";
import Proj2 from "./routes/Proj/Proj2";
import Proj3 from "./routes/Proj/Proj3";

import subProj1 from "./routes/Proj/subProj/subProj1";

import subProj0_1 from "./routes/Proj/subProj/subProj0_1";
import subProj0_2 from "./routes/Proj/subProj/subProj0_2";

import Qna1 from "./routes/Qna/Qna1";
import Qna2 from "./routes/Qna/Qna2";

import ClassAppli from "./routes/Proj/subProj/ClassAppli";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* 메인 페이지 */}
      <Route path="/" exact={true} component={Home}></Route>

      {/* 기업소개 페이지 */}
      <Route path="/illi-intro/0" component={Intro1}></Route>
      <Route path="/illi-intro/1" component={Intro2}></Route>
      <Route path="/illi-intro/2" component={Intro3}></Route>

      {/* 프로젝트 페이지 */}
      <Route path="/illi-proj/0" exact={true} component={Proj1} />
      <Route path="/illi-proj/1" exact={true} component={Proj2} />
      <Route path="/illi-proj/2" component={Proj3} />

      <Route path="/illi-proj/1/0" component={subProj1} />

      <Route path="/illi-proj/0/0" component={subProj0_1} />
      <Route path="/illi-proj/0/1" component={subProj0_2} />

      <Route path="/illi-proj/0/apply-class" component={ClassAppli} />

      {/* 문의사항 페이지 */}
      <Route path="/illi-qna/0" component={Qna1} />
      <Route path="/illi-qna/1" component={Qna2} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
