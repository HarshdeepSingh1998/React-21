import React, { useState } from "react";

function App() {
  // var count =0;
  // const state = React.useState(5);
  const [count, setCount] = useState(5);

  function increase() {
    // count++;
    setCount(count + 1);
  }
  return (
    <div className="container">
      {/* <h1>{state[0]}</h1> */}
      <h1>{count}</h1>

      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
