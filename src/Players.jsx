import React, { Fragment, useEffect } from "react";
import {
  ActionModal,
  ActionTodosPlayers,
  ActionLoading,
} from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";

import Buscar from "./Buscar";
import Paginados from "./Paginados";
import Modal from "./Modal";
import Load from "./Load";
export default function Players() {
  const dispatch = useDispatch();
  const jugadores = useSelector((state) => state.jugadores);
  const buscadocomponente = useSelector((state) => state.buscadocomponente);
  const loading = useSelector((state) => state.loading);
  const modal = useSelector((state) => state.modal);

  const namee = useSelector((state) => state.namee);
  useEffect(() => {
    if (!jugadores.length) {
      dispatch(ActionTodosPlayers());
    }
  }, [dispatch, jugadores]);

  function handleClick(evento, data, datoname) {
    evento.preventDefault();
    dispatch(ActionModal(data, true, datoname));
    console.log(data.items, "clik");
  }

  return (
    <Fragment>
      <br />

      <div key={Math.random(5)}>
      
        {loading === true ? (
          <center>
            <Load></Load>{" "}
          </center>
        ) : (
          ""
        )}
        {buscadocomponente === true && loading === false ? (
          <Buscar></Buscar>
        ) : (
          <Paginados></Paginados>
        )}
        {modal === true ? <Modal /> : ""}
        {jugadores && loading === false
          ? jugadores.map((jugadores) => (
              <div
                className="card" key={Math.random(5)}
                onClick={(event) => handleClick(event, jugadores.items)}
              >
                <div className="cuadro" key={Math.random(5)}>
                  <br />
                  <img src={jugadores.items.imgjugador} className="jugador" />
                  <br />
                  <img src={jugadores.items.nationid} />
                </div>{" "}
                <br />
                <img src={jugadores.items.img} className="equipo" />
                <br />
                <br />
                <h1> {jugadores.items.name}</h1>
                <br />
                <br />
              </div>
            ))
          : !jugadores
          ? ""
          : ""}
        <br />
      </div>
    </Fragment>
  );
}
