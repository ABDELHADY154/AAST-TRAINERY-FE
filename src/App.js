/** @format */

import React, { component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registry from "./authentication/Registry";
import Home from "./authentication/Home";
import Login from "./authentication/Login";
import Nav from "./authentication/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>

        <div className='app'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Switch>
                <Route exact path='/Register' component={Registry}></Route>
                <Route exact path='/Login' component={Login}></Route>
                <Route exact path='/Home' component={Home}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
