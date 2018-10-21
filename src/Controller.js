import React from 'react';
import Store from './Store';
import DisplayProfils from './DisplayProfils';
import SortableProfils from './SortableProfils';
import FilterProfils from './FilterProfils';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./css/styles.css";

class Controller extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			profils: [],
			filteredTab:[],
			flag:true
		};
		this.getData();
	}
	 getData(){
		Store.getProfils().then((profils) => {
			this.setState({profils: profils, filteredTab: profils});
		});
	}
	componentDidUpdate(){
		if (localStorage.getItem('profils') && this.state.flag){
			let profils = localStorage.getItem('profils');
			profils = JSON.parse(profils);
			this.setState({profils: profils, filteredTab: profils, flag:false});
		}
	}
	
	handleClick(){
		localStorage.clear('profils');
		this.getData();
	}

	reloadProfils(profils){
		this.setState({profils: profils});
	}

	reloadFilterProfils(profils){
		this.setState({filteredTab:profils})
	}

	render(){
		return(
			<div>
				<h1>Profils</h1>
				<Link className="link-settings" to="/settings">Settings</Link>
				<FilterProfils profils={this.state.profils} reloadFilterProfils={(profils) => this.reloadFilterProfils(profils)}/>
				<button onClick={()=>this.handleClick()}>refresh</button>
				<table>
					<tbody>
						<SortableProfils profils={this.state.filteredTab} reloadProfils={(profils) => this.reloadProfils(profils)} />
						<DisplayProfils profils={this.state.filteredTab} />
					</tbody>
				</table>
			</div>
		);
	}

}

export default Controller;
