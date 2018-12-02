import React from "react";
import ReactDOM from "react-dom";
import Controller from "./Controller";
import Settings from "./Settings";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		  <Router>
		  	<div>
			   <Route exact path="/" component={Controller} />
			   <Route path="/settings" component={Settings} />
			</div>
		  </Router>
		)
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
export default App;