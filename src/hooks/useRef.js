import React, { useRef } from "react";

const App = () => {
  const potato = useRef();
  setTimeout(() => potato.current?.focus(), 3000);
  return (
    <div className="App">
      <h1>What is Reference?</h1>
      <input ref={potato} placeholder="wow" />
    </div>
  );
};

export default App;
