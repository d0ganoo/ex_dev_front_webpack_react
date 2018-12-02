import React, {Component} from "react";
import Store from './Store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Settings extends Component{
	constructor(props){
		super(props);
		this.state = {
			profils:[],
			msgError:""
		}
	}

	async getData(url){
		await Store.getProfils(url).then((profils) => {
			this.setState({profils: profils, msgError:"Profils enregistrés"});
		}).catch(() => this.setState({msgError:"L'url n'est pas valide"}));
		if (this.state.profils.length !== 0){
			this.saveProfils(this.state.profils);
		}
	}

	saveProfils(profils){
		console.log(profils);
		localStorage.setItem('profils', JSON.stringify(profils));
	}

	handleChange(event){
		let url = event.target.value.toLowerCase();
		this.getData(url);
	}

	render(){
		const {msgError} = this.state;
		return(
			<div>
				<h1>Settings</h1>
				<Link to="/">Profils</Link>
				<label className="label-url" htmlFor="url">
					Url: <input onChange={(e) => this.handleChange(e)}/>
				</label>
				<span>{msgError}</span>
			</div>
		);
	}
}

export default Settings;