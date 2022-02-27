import React, { Fragment, useState } from "react";

import { ElActionNew , ActionNewUser} from "../Redux/Actions";
import { useDispatch } from "react-redux";
import Img from "../Icos/info.png"

export default function New() {
    const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [elerror, setError] = useState("");


  

  function handlenNewUser (event) {
    event.preventDefault();
    if (email && name && company && lastname) {
      setError("Enviando data")
      dispatch(ActionNewUser(name, lastname, company, email));
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

  function handleCambioName(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleCambioLastName(event) {
    event.preventDefault();
    setLastName(event.target.value);
  }

  function handleCambioCompany(event) {
    event.preventDefault();
    setCompany(event.target.value);
  }

  return (
    <Fragment>
      <div className="modal">
      {elerror}
        <form onSubmit={handlenNewUser}>
            <img className="Imamin"  src={Img}/><br></br><p>Ingrese datos de nuevo usuario</p>
          <div className="Search">
            
            
            <input 
              type="text" placeholder="Nombre"
              onChange={(event) => handleCambioName(event)}
            
              name="nombre"
              id="nombre"
              required
            />
            <br/><br/>
            <input 
              type="text" placeholder="Apellido"
              onChange={(event) => handleCambioLastName(event)}
            
              name="apellido"
              id="apellido"
              required
            />

<br/><br/>
            <input 
              type="email" placeholder="Email"
              onChange={(event) => handleCambioEmail(event)}
            
              name="email"
              id="email"
              required
            />


<br/><br/>
            <input 
              type="text" placeholder="Empresa"
              onChange={(event) => handleCambioCompany(event)}
            
              name="empresa"
              id="empresa"
              required
            />


          </div>
<center>
         

          <div >
            <input  className="buscarboton"type="submit" />
            <button className="buscarboton" onClick={(event) => handleCloseNew(event)}>Cancelar</button>
          </div> </center>
        </form>
       
      </div>
    </Fragment>
  );
}
