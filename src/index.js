import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// ReactDOM.render(
//   <div className="container">
//     <h1>0</h1>
//     <button>+</button>
//   </div>,
//   document.getElementById("root")
// );
// var count =0;

// function increase(){
//   count++
//   ReactDOM.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//     </div>,
//     document.getElementById("root")
//   );
// }
// ReactDOM.render(
//   <div className="container">
//     <h1>{count}</h1>
//     <button onClick={increase}>+</button>
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));
