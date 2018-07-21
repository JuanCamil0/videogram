import React, {Component} from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';

//Componente funcional
function Playlist(props) {
	
		const playlist = props.data.categories[0].playlist
		console.log(props.data);
		return (
			<div className="Playlist">
			  <Play
			    size={100}
			    color="red"
			  />
			  {
			  	playlist.map((item) => {
			  		//return <Media title={item.title} key={item.id}/>  ES6: toca especificar cada prop explicitamente
			  		return   <Media {...item} key={item.id}/> //ES7 cada prop se asigna implicitamente
			  	})
			  }
			</div>
		)
}

/*
class Playlist extends Component {
	render(){
		const playlist = this.props.data.categories[0].playlist
		console.log(this.props.data);
		return (
			<div className="Playlist">
			  {
			  	playlist.map((item) => {
			  		//return <Media title={item.title} key={item.id}/>  ES6: toca especificar cada prop explicitamente
			  		return   <Media {...item} key={item.id}/> //ES7 cada prop se asigna implicitamente
			  	})
			  }
			</div>
		)
	}
}
*/
export default Playlist;