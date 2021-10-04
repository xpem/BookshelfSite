import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './MainPage';

function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={MainPage}></Route>
        </BrowserRouter>
    )
}

export default Routes;