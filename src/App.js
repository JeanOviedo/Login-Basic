import { Fragment } from "react";

import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Componentes/Navbar"
import Contacto from "./Componentes/Contacto";
import Landing from "./Componentes/Landing";
import New from "./Componentes/New";


function App() {

  return (
    <Fragment>
      <Navbar></Navbar><br></br><br></br>
      
     
     

      <Switch>
   
        <Route exact path="/">
          <Landing />
        </Route>

      
      
        <Route exact path="/contacto">
          <Contacto />
        </Route>
      

        <Route exact path="/nuevousuario">
          <New/>
        </Route>
      
      

        
      </Switch>
    </Fragment>
  );
}

export default App;
