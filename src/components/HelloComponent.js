import React  from 'react'
import './HelloComponent.css'
 

export const HelloComponent = ({id,nome,cognome,eliminaPersona,modificaPersona}) => {
    return (

<div className="containerHelloComponent">
    <h4> {id} Hello {nome} {cognome} </h4>
    <button id="btnModifica" onClick={()=>modificaPersona(id)}> Modifica</button>
    <button id="btnElimina" onClick={()=>eliminaPersona(id)}> Elimina</button>
</div>
    );
}

