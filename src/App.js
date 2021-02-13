import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Intro from "./routes/Intro";
import Proj from "./routes/Proj";
import Qna from "./routes/Qna";

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* 메인 페이지 */}
      <Route path="/" exact={true} component={Home} />
      {/* 기업소개 페이지 */}
      <Route path="/illi-intro" component={Intro} />
      {/* 프로젝트 페이지 */}
      <Route path="/illi-proj" component={Proj} />
      {/* 문의사항 페이지 */}
      <Route path="/illi-qna" component={Qna} />
      <Footer />
    </HashRouter>
  );
}

export default App;
