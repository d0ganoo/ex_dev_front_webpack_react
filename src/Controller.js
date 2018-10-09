import React from 'react';
import Store from './Store';
import DisplayProfils from './DisplayProfils';
import SortableProfils from './SortableProfils';

class Controller extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			profils: []
		};
		Store.getProfils().then((profils) => {
			this.setState({profils: profils});
		});
	}

	reloadProfils(profils){
		this.setState({profils: profils});
	}

	handlechange(event){
		console.log(event.target.value);
	}	

	render(){
		return(
			<div>
				<label>
					Rechecher:
					<input type="text" onChange={(e)=>this.handlechange(e)}/>
				</label>
				<table>
					<SortableProfils profils={this.state.profils} reloadProfils={(profils) => this.reloadProfils(profils)} />
					<DisplayProfils profils={this.state.profils} />
				</table>
			</div>
		);
	}

}

export default Controller;
