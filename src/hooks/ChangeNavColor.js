import React, { useEffect, useRef, useState } from "react";

// Todo : 버튼 클릭이 아닌 방법으로 접근시 리다이렉트 필요

function ChangeNavColor(initState = 0) {
  const [state, setState] = useState(initState);
  const [substate, setSubState] = useState(initState);
  const [stateChild, setStateChild] = useState([]);

  // OnClick Function
  const changeState = (currentState, event) => {
    setStateChild(currentState.child);
    setState(currentState.id);
  };
  // OnClick Function
  const changeSubState = (currentSubState) => {
    setSubState(currentSubState);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".nav-button");
    const selectedTag = elements[state]; // 선택한 태그

    const subElements = document.querySelectorAll(".nav-button-sub");
    const selectedTagsub = subElements[substate]; // 선택한 서브 태그

    // ----

    // Object to Array
    const elementsArr = [];
    for (let i = 0; i < elements.length; i++) {
      elementsArr.push(elements[i]);
    }

    const subArr = [];
    for (let i = 0; i < subElements.length; i++) {
      subArr.push(subElements[i]);
    }

    // ----

    // 선택 상태 초기화
    elementsArr.map((arrEle) => {
      return (
        (arrEle.style.color = "black"), (arrEle.style.borderBottom = "none")
      );
    });

    subArr.map((arrEle) => {
      return (
        (arrEle.style.color = "gray"), (arrEle.style.borderBottom = "none")
      );
    });

    // ----

    // 선택 하기
    if (state !== 0) {
      selectedTag.style.color = "purple";
      selectedTag.style.borderBottom = "2.2px solid purple";
      selectedTagsub.style.color = "black";
    } else {
      console.log("메인 화면입니다.");
    }
  }, [state, substate]);

  return { changeState, stateChild, state, changeSubState };
}

export { ChangeNavColor };
