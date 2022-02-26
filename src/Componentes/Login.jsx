import React, { Fragment, useState } from "react";

import { ElAddToken } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Img from "../Icos/sec.png"

export default function Login() {
    const dispatch = useDispatch();
 
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

  
  function handleCambioPass(event) {
    event.preventDefault();
    setPass(event.target.value);
  }
  return (
    <Fragment>
      <div className="modal">

        <form onSubmit={handleClick}>
            <img className="Ima2"  src={Img}/><br></br><p>Favor Inicie sesión</p>
          <div className="Search">
            
            
            <input 
              type="text" placeholder="Username"
              onChange={(event) => handleCambioEmail(event)}
            
              name="email"
              id="email"
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
          </div> </center>
        </form>
       
      </div>
    </Fragment>
  );
}
