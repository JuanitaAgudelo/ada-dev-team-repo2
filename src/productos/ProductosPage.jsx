import React, { Fragment, useState, useEffect, Route } from 'react';
import { NavLink } from 'react-router-dom';
import './productosStyles.css';
import HeaderComponent from '../shared/components/header/HeaderComponent';
import FooterComponent from '../shared/components/footer/FooterComponent';
import Axios from 'axios';
import apiBaseUrl from "../shared/Utils/Api";


function ProductosPage(){

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [valorUnitario, setValorUnitario] = useState(0);
    const [estado, setEstado] = useState("");

    const addProduct = async () => {
        const productData = {
            id: 0,
            nombre: nombre,
            descripcion: descripcion,
            valorUnitario: valorUnitario,
            estado: estado
        }
        const response = await fetch(`http://localhost:3001/add-product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const mensaje = 'Se ha registrado exitosamente el producto con nombre: '+nombre+', descripción: '+descripcion+', valor unitario: '+valorUnitario+' y estado: '+estado
        alert(mensaje);
    }

    return(
        <Fragment>                      
        <div className="title">
            <h1>Productos</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="column-4">
                </div>
                <div className="column-4">
                <form>
                    <div className="formVendedores">                            
                            <div className="input-group mb-3 formulario">
                                <label htmlFor="nombre" className="form-label">Nombre</label>             
                                <input type="text" id = "nombre" className="form-control" name = "nombre" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setNombre(e.target.value)}/>
                            </div>                        
                            <div className="input-group mb-3"> 
                                <label htmlFor="descripcion" className="form-label">Descripción</label>           
                                <input type="text" id = "descripcion" className="form-control" name = "descripcion" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setDescripcion(e.target.value)}/>
                            </div>
                            <div className="input-group mb-3"> 
                                <label htmlFor="valorUnitario" className="form-label">Valor Unitario</label>           
                                <input type="number" id = "valorUnitario" className="form-control" name = "valorUnitario" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  onChange={(e) => setValorUnitario(e.target.value)} />
                            </div>                        
                            <div className="input-group mb-3 formulario">
                                <label htmlFor="estado" className="form-label">Estado</label>            
                                <input type="text" id = "estado" className="form-control" name = "estado" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"   onChange={(e) => setEstado(e.target.value)}/>
                            </div>                         
                            <div className="d-grid gap-2 d-md-block"> 

                                <button type="submit" className="btn btn-primary mx-2" onClick={addProduct}>Registrar</button>                      
                                
                                <button className="btn btn-info mx-2" type="button"><NavLink to="/ListadoProductos" >Consultar</NavLink></button>
                            </div>
                    </div>
                </form>
                </div>
                <div className="column-4">
                </div>
            </div>
        </div>             
        </Fragment>
    )
}

export default ProductosPage;