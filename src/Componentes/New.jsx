import React, { Fragment, useState } from "react";

import { ElAddToken, ElActionNew } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Img from "../Icos/info.png"

export default function New() {
    const dispatch = useDispatch();
  let modaldata = useSelector((state) => state.modaldata);
  //let error = useSelector((state) => state.error);
  const [email2, setEmail] = useState("");
  const [pass2, setPass] = useState("");
  const [error, setError] = useState("");


  function handleClick(evento) {
    evento.preventDefault();
    if (email2 && pass2) {
      setError("Enviando data")
      dispatch(ElAddToken(email2, pass2));
      setError("")
      
    }
    else{
      setError("Verifique si campos estan vacios")
    }
    
  }

  function handleCambioEmail(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function handleCloseNew(event) {
    dispatch(ElActionNew(false));
  }

  function handleCambioPass(event) {
    event.preventDefault();
    setPass(event.target.value);
  }
  return (
    <Fragment>
      <div className="modal">

        <form onSubmit={handleClick}>
            <img className="Imamin"  src={Img}/><br></br><p>Ingrese datos de nuevo usuario</p>
          <div className="Search">
            
            
            <input 
              type="text" placeholder="Nombre"
              onChange={(event) => handleCambioEmail(event)}
            
              name="nombre"
              id="nombre"
              required
            />
            <br/><br/>
            <input 
              type="text" placeholder="Apellido"
              onChange={(event) => handleCambioEmail(event)}
            
              name="apellido"
              id="apellido"
              required
            />

<br/><br/>
            <input 
              type="text" placeholder="Email"
              onChange={(event) => handleCambioEmail(event)}
            
              name="email"
              id="email"
              required
            />


<br/><br/>
            <input 
              type="text" placeholder="Empresa"
              onChange={(event) => handleCambioEmail(event)}
            
              name="empresa"
              id="empresa"
              required
            />


          </div>
<center>
          <div className="Search">
         
            <input 
              type="password"
              name="pass" placeholder="Password "
              onChange={(event) => handleCambioPass(event)}
           
              id="pass"
              required
            />
          </div>

          <div >
            <input  className="buscarboton"type="submit" />
            <button className="buscarboton" onClick={(event) => handleCloseNew(event)}>Cancelar</button>
          </div> </center>
        </form>
       
      </div>
    </Fragment>
  );
}
