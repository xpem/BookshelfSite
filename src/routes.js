import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import CreateUser from "./pages/User/CreateUser";

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/CreateUser" component={CreateUser}></Route>
        </BrowserRouter>
    )
}

export default Routes;