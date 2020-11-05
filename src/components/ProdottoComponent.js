import React  from 'react'
import { Card } from 'react-bootstrap';
import './HelloComponent.css'
 
export const ProdottoComponent = ({prodotto,eliminaProdotto}) => {
    return (

<div className="containerProdottoComponent">
<Card  style={{ width: '18rem'}}>
  <Card.Body >
    <h4> <Card.Title>ID: {prodotto.id}</Card.Title> 
         <Card.Text>{prodotto.titolo}</Card.Text> 
         <Card.Text>Prezzo: {prodotto.prezzo}</Card.Text>
         <Card.Subtitle>{prodotto.descrizione}</Card.Subtitle></h4>
    <button id="btnElimina" onClick={()=>eliminaProdotto(prodotto.id)}> Elimina Prodotto</button>
  </Card.Body>
</Card>
</div>
    );
}
