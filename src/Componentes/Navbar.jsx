import React, {Fragment, useRef, useState} from "react";
import Logo from "../Icos/LOGO.png";
import {useDispatch , useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {ElActionSesionRemove,   ElActionNew,} from "../Redux/Actions";



export default function Navbar() {
    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location);
    

    function Sesionremove() {
        dispatch(ElActionSesionRemove());
    }

    
    function New() {
        dispatch(ElActionNew(true));
    }

    return (
        <header className="navbar">
            <div className="logodiv">
                {" "}
                <Link to="/">
                    {" "}
                    <img id="logo"
                        src={Logo}
                        className="logo"
                        alt=""/>
                </Link>
            </div>
            <nav className="logoder">
                <ul className="menu">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>

                    {!login == true? (
                        <Fragment>
                            <li>
                                <Link to="" onClick={
                                        () => {
                                            New();
                                        } }>New User</Link>
                            </li>

                            <li>
                                <Link to="/"
                                    onClick={
                                        () => {
                                            Sesionremove();
                                        }
                                }>
                                    Salir
                                </Link>
                            </li>
                        </Fragment>
                    ) : ("")
                }

                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
