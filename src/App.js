import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Intro1 from "./routes/Intro/Intro1";
import Intro2 from "./routes/Intro/Intro2";
import Intro3 from "./routes/Intro/Intro3";

import Proj from "./routes/Proj";
import Qna from "./routes/Qna";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* 메인 페이지 */}
      <Route path="/" exact={true} component={Home}></Route>
      {/* 기업소개 페이지 */}
      {/* <Route path="/illi-intro" exact={true} component={Intro}></Route> */}
      <Route path="/illi-intro/0" component={Intro1}></Route>
      <Route path="/illi-intro/1" component={Intro2}></Route>
      <Route path="/illi-intro/2" component={Intro3}></Route>

      {/* 프로젝트 페이지 */}
      <Route path="/illi-proj/0" component={Proj} />
      <Route path="/illi-proj/1" component={Proj} />
      <Route path="/illi-proj/2" component={Proj} />

      {/* 문의사항 페이지 */}
      <Route path="/illi-qna/0" component={Qna} />
      <Route path="/illi-qna/1" component={Qna} />
      <Route path="/illi-qna/2" component={Qna} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
