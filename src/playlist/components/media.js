//import React from 'react'; este import funciona con la linea 4
import React, {Component} from 'react';
import './media.css';

//class Media extends React.Component { esta linea funciona con el import de la linea 1
class Media extends Component {
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
			<div className="Media">
			  <div>
			    <img
			      src={this.props.image}
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

export default Media;