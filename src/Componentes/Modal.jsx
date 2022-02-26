import React, { Fragment, useState } from "react";

import { Modal} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Img from "../Icos/info.png";

export default function Login() {
    const dispatch = useDispatch();
  let modal= useSelector((state) => state.modal);
  


  function handleClick(evento) {
    evento.preventDefault();
    dispatch(Modal(false, "Guardado el el menú con exito"));
  }

 
  return (
    <Fragment>
      <div className="modal"><br></br><br></br>
        <img src={Img} className="Ima3"></img>

      <h1>{modal.msg}</h1>
          


<button onClick={handleClick} className="buscarboton"> Cerrar</button>
       
            
          </div>
        
    </Fragment>
  );
}
