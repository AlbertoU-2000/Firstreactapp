
import React, { useEffect, useState } from 'react'
import { LoginComponent } from '../components/LoginComponent';
import { LayoutPage } from '../layout/Layoutpage';
import { utenteServices } from '../services/utente.service';
import { history } from '../utils/history';


function Loginpage() {
    

    const [state, setState]= useState({username:"", password:""})
    const [utenteLoggato, setutenteLoggato]=useState({});
    const onChange=(e)=>{

      setState({...state, [e.target.name]:e.target.value})
    }

    const loginUtente=() =>
    {

        var utente = {username:state.username, password:state.password};
        
        utenteServices.loginUtente(utente).then((response) => {

            setutenteLoggato(response);
            if(response.success){
                localStorage.setItem('utenteloggato', JSON.stringify(response))
                history.push('/prodotti')
            }else{

                setState({username:"", password:""});
                alert('Credenziali errate!!')
            }
        })


    }

return(

    <>
    <LoginComponent state={state} loginUtente={loginUtente} onChange={onChange}> </LoginComponent>
    </>

)
}

const LayoutLogin = LayoutPage(Loginpage);
export {LayoutLogin as Loginpage}
