import React from 'react';

function Icon(props){
	//Si yo quiero pasarle cualquier cosa a mi icono y que retorne eso que pasé, uso el {props.children}
	//Cada vez que yo importe un Icon desde otro lado, el return me mandan a su hijo con {props.children}

    //Destructuracion del parametro props para usar directamente sus valores abajo
    const {
	  color,
	  size,
    } = props

	return(
		<svg
		  fill={color}
		  height={size}
		  width={size}
		  viewBox="0 0 32 32"
		>
		  {props.children}
		</svg>
	)
}

export default Icon