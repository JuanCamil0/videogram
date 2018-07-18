import React from 'react';
//import ReactDOM from 'react-dom'; este import funciona con la linea 12
import {render} from 'react-dom';
import Media from './src/playlist/components/media';
//console.log('Hola mundo!')

const app = document.getElementById('app')

//ReactDOM.render(que voy a renderizar,donde lo haré)
//const holaMundo = <h1>hola Estudiante!</h1>;

//ReactDOM.render(<Media/>,app); esta linea funciona con el import de la linea 2
render(<Media title="¿Qué es responsive Design?" author="JuanFranco" image="./images/covers/bitcoin.jpg"/>,app);