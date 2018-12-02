import React from 'react';
import PropTypes from 'prop-types';

class SortableProfils extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sortOrder: true
		};
	}

	sortAsc(profils, name){
		return isNaN(parseFloat(profils[0][name])) === false ? 
			profils.sort((a, b) => a[name] - b[name]) : 
			profils.sort((a, b) => a[name].localeCompare(b[name]));
	}

	sortDesc(profils, name){
		return isNaN(parseFloat(profils[0][name])) === false ? 
			profils.sort((a, b) => b[name] - a[name]) : 
			profils.sort((a, b) => b[name].localeCompare(a[name]));
	}

	sort(profils, name){
		if (this.state.sortOrder === true){
			this.sortAsc(profils, name);
			this.setState({sortOrder:false});
		}
		else{
			this.sortDesc(profils, name);
			this.setState({sortOrder:true});
		}
		this.props.reloadProfils(profils);
	}

	render(){
		return (
			<tr>
				<th>Picture</th>
				<th  onClick={() => this.sort(this.props.profils, "lastname")}>Lastname</th>
				<th  onClick={() => this.sort(this.props.profils, "firstname")}>Firstname</th>
				<th  onClick={() => this.sort(this.props.profils, "balance")}>Balance</th>
			</tr>
		);
	}

}

SortableProfils.propTypes = {
		profils: PropTypes.array.isRequired,
		reloadProfils: PropTypes.func.isRequired
}

export default SortableProfils;