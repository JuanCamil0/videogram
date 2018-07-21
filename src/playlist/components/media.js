//import React from 'react'; este import funciona con la linea 4
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';

//class Media extends React.Component { esta linea funciona con el import de la linea 1
class Media extends PureComponent {

	/* Definicion Estado inicial en ECMAScript7
	state = {
		author: 'UnAutor'
	}*/

    //ECMAScript 6
    //Enlazamos las propiedades del componente de React al constructor de la clase
	constructor(props){ //Recibimos las propiedades del componente
		super(props)

		//Estado inicial
        this.state = {
        	author: props.author
        }
		//Enlazamos el evento this.handleClick con la clase (this) en ECMAScript6
		//this.handleClick = this.handleClick.bind(this);
	}

/*  EMScript 6
	handleClick(event){
		console.log(this.props.title)
	}
*/

    //Otra forma con ECMAScript 7
    handleClick = (event) => {
    	//console.log(this.props.image)

    	//Metodo para cambiar el Estado
    	this.setState({
    		author: 'CamiloFranco'
    	})
    }

	render(){
		const styles = {
			container: {
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px solid red'
			}
		}
		return (
			<div className="Media" onClick={this.handleClick}>
			  <div>
			    <img
			      src={this.props.cover}
			      alt=""
			      width={260}
			      height={160}
			      className="Media-image"
			    />
			    <h3 className="Media-title">{this.props.title}</h3>
			    <p className="Media-author">{this.props.author}</p>
			   </div>
			</div>
		)
	}
}

Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video','audio']),
}

export default Media;