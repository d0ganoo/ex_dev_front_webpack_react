import React from 'react';
import PropTypes from 'prop-types';

class SortableProfils extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sortOrder: true,
			sortedProfils: []
		};
	}

	sortAsc(profils, name){
		if(isNaN(parseFloat(profils[0][name])) === false){
			this.sortedProfils = profils.sort((a, b) => a[name] - b[name]);
		}
		else{
			this.sortedProfils = profils.sort((a, b) => a[name].localeCompare(b[name]));
		}
	}

	sortDesc(profils, name){
		if(isNaN(parseFloat(profils[0][name])) === false){
			this.sortedProfils = profils.sort((a, b) => b[name] - a[name]);
		}
		else{
			this.sortedProfils = profils.sort((a, b) => b[name].localeCompare(a[name]));
		}
	}

	sort(profils, name){
		if (this.state.sortOrder == true){
			this.state.sortedProfils = this.sortAsc(profils, name);
			this.setState({sortOrder:false});
		}
		else{
			this.state.sortedProfils = this.sortDesc(profils, name);
			this.setState({sortOrder:true});
		}
		this.props.sortProfils(profils);
	}

	render(){
		return (
			<tr>
				<th>Picture</th>
				<th class="sortable" onClick={() => this.sort(this.props.profils, "lastname")}>Lastname</th>
				<th class="sortable" onClick={() => this.sort(this.props.profils, "firstname")}>Firstname</th>
				<th class="sortable" onClick={() => this.sort(this.props.profils, "balance")}>Balance</th>
			</tr>
		);
	}

}

export default SortableProfils;