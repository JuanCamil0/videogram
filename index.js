import React from 'react';
//import ReactDOM from 'react-dom'; este import funciona con la linea 12
import {render} from 'react-dom';
//import Media from './src/playlist/components/media';
import Playlist from './src/playlist/components/playlist'
import data from './src/api.json';
//console.log('Hola mundo!')

const app = document.getElementById('app')

//ReactDOM.render(que voy a renderizar,donde lo haré)
//const holaMundo = <h1>hola Estudiante!</h1>;

//ReactDOM.render(<Media/>,app); esta linea funciona con el import de la linea 2
render(<Playlist data={data} />,app);