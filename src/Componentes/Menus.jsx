import React, {Fragment, useEffect, useRef} from "react";
import {

    ActionTodosMenu,
  
    ActionQuitar,
    ElLogin

} from "../Redux/Actions";
import {useSelector, useDispatch} from "react-redux";
import Modal from "./Modal";

import Login from "./Login";
import {Link} from "react-router-dom";
import New from "./New";
export default function Menus() {
    let todos = useSelector((state) => state.todos);
    const login = useSelector((state) => state.login);
    const modal = useSelector((state) => state.modal.visible);
    const newuser = useSelector((state) => state.new);
    const dispatch = useDispatch();
    const boton = useRef(null);
    let dataa = localStorage.getItem("myData");

    useEffect(() => {
        if (! dataa) { // token
            dispatch(ElLogin());
        } else {

            if (! todos.length) {
                dispatch(ActionTodosMenu());
            } else {

                todos = localStorage.getItem("Users");
                todos = JSON.parse(todos);

                console.log(todos, "LOCAL DATAS")
            }
        }
    }, [dispatch]);


    function Quitar(evento, id) {


        dispatch(ActionQuitar(id));

    }


    return (
        <Fragment>
            <br/> {
            login == true ? <Login></Login> : ""
        }
            {
            modal === true ? <Modal></Modal> : ""
        }


            {
            newuser === true ? <New></New> : ""
        }

            <br></br>


            <div className="container2"
                key={
                    Math.random(5)
            }>

                {
                console.log(todos, "TODOS FRONT")
            }
                {
                todos.length ? todos.map((todos) => (
                    <div className="card"
                        key={
                            Math.random(5)
                    }>

                        <div key={
                            Math.random(5)
                        }>
                            <h1> {
                                todos.first_name
                            }
                                {" "}
                                {
                                todos.last_name
                            }</h1>
                            <h2>Correo : {
                                todos.email
                            } </h2>
                            <h2>
                                Empresa: {
                                todos.company
                            }</h2>
                            <br></br>
                            <button className="buscarboton"
                                onClick={
                                    (event) => Quitar(event, todos.id)
                            }>
                                Eliminar
                            </button>
                            <br/>
                            <br/>
                            <img src={
                                    todos.img == undefined ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQML09PCY3O9e_sD3yCJSUyK_Ai157oP3Lvlg&usqp=CAU" : todos.img
                                }
                                className="jugador"/>
                        </div>

                        <br/>
                        <br/>
                    </div>
                )) : ! todos ? "" : (
                    <h2 className="container2">No hay usuarios, recargue pagina para descargarlos de nuevo desde API POSTMAN o Mockserver llego al limite mensual</h2>
                )
            }
                <br/>
            </div>
        </Fragment>
    );
}
