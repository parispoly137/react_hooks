// useClick과 완전 동일한 함수. 이벤트만 mouseenter로 바꿈

import React, { useEffect, useRef } from "react";

const useHover = onHover => {
  // if (typeof onHover !== "function") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);

  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>useHover Practice</h1>
    </div>
  );
};

export default App;
