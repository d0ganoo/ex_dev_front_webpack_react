import React from 'react';

class DisplayProfils extends React.Component {
	displayProfil(profil){
		return (
			<tr>
				<td><img src={profil.picture} alt="avatar"/></td>
				<td>{profil.lastname}</td>
				<td>{profil.firstname}</td>
				<td>{profil.balance}</td>
			</tr>		
		);
	}

	browseProfils(profils){
		return profils.map(profil => this.displayProfil(profil));
	}

	render(){
		return(
			this.browseProfils(this.props.profils)
		);
	}
}

export default DisplayProfils;

