import React from "react";
import ReactDOM from "react-dom";
import Controller from "./Controller";

const App = () => {
  return (
	<Controller />
  );
};


ReactDOM.render(<App />, document.getElementById("app"));
export default App;