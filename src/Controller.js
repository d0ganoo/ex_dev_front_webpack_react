import React from 'react';
import Store from './Store';
import DisplayProfils from './DisplayProfils';
import SortableProfils from './SortableProfils';
import FilterProfils from './FilterProfils';

class Controller extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			profils: [],
			filteredTab:[]
		};
		this.getData();
	}

	getData(){
		Store.getProfils().then((profils) => {
			this.setState({profils: profils, filteredTab: profils});
		});
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
				<FilterProfils profils={this.state.profils} reloadFilterProfils={(profils) => this.reloadFilterProfils(profils)}/>
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
