import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FilterProfils extends Component{
	constructor(props){
		super(props);
	}

	handlechange(event){
		let str =  event.target.value.toUpperCase();
   		let filteredProfils = [];
   		let profils = this.props.profils;

		for (let i = 0; i < profils.length; i++) {
			if (profils[i].lastname.toUpperCase().includes(str) || profils[i].firstname.toUpperCase().includes(str)) {
				filteredProfils.push(profils[i]);
			}
		}
		this.props.reloadFilterProfils(filteredProfils);
	}	

	render(){
		return(
			<label>
				Rechecher:
				<input type="text" onChange={(e)=>this.handlechange(e)}/>
			</label>
		);
	}
}

FilterProfils.propTypes = {
		reloadFilterProfils: PropTypes.func.isRequired,
		profils: PropTypes.array.isRequired
}

export default FilterProfils;