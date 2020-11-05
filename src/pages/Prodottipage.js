import React, { useEffect, useLayoutEffect, useState } from 'react'
import { prodottiServices } from '../services/prodotti.service';
import { ProdottoComponent } from '../components/ProdottoComponent';
import { LayoutPage } from '../layout/Layoutpage';
import { history } from '../utils/history';

 const Prodottipage=()=>{

    useLayoutEffect(()=>{
        if(!JSON.parse(localStorage.getItem('utenteloggato'))?.success)
     
          history.push('/login')
    
        }, []);
    
    const [listaProdotti, setListaProdotti] = useState();

    useEffect(()=>{
        prodottiServices.getAllProdotti().then((response) => {
            console.log(response)
            setListaProdotti(response)
        });
    }, []);

    const eliminaProdotto=(id)=>{
        prodottiServices.eliminaProdotto(id).then((response) => {

            setListaProdotti(response);
        })
    }
    //le quadre prevengono un loop, dicono all'istruzione che deve aggiornare lo stato solo la prima volta
return <> {listaProdotti ?
         listaProdotti.map(prodotto => 
            <ProdottoComponent prodotto={prodotto} eliminaProdotto={eliminaProdotto}/>)  :
              <h1>NON ESISTE</h1> }</>
};

const LayoutProdotti = LayoutPage(Prodottipage);
export {LayoutProdotti as Prodottipage}