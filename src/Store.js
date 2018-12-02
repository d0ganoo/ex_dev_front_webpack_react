import React from 'react';

class Store extends React.Component {
	static getProfils(url="https://demo0050088.mockable.io/simple/profils"){
		return fetch(url)
		.then(profils => profils.json());
	}
}

export default Store;