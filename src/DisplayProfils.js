import React from 'react';

<<<<<<< HEAD
class DisplayProfils extends React.Compenent {
	constructor(props){
		super(props);
=======
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
>>>>>>> e5168ae... part 2 done
	}

	render(){
<<<<<<< HEAD
		// return(
			
		// );
=======
		return(
			this.browseProfils(this.props.profils)
		);
>>>>>>> e5168ae... part 2 done
	}
}

export default DisplayProfils;

