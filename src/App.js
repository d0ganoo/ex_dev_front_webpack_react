import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <p>autre test </p>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("app"));
export default App;