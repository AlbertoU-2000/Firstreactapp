import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { history } from '../utils/history';

export const NavbarComponent =() =>{


  const logout=()=>{
   localStorage.removeItem('utenteloggato');
   history.push('/login');
}
    return(

        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
    <Link to="/">Home</Link>
    <Link to="/prodotti">Prodotti</Link>
    <button id="btnLogout" onClick={()=>logout()}>Logout</button>
  </Navbar>
</>



    );
}