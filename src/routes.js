import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InsertUser from "./pages/User/InsertUser";
import Login from "./pages/User/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/User/ForgotPassword";
import UpdateUser from "./pages/User/UpdateUser";
import InsertBook from "./pages/Books/InsertBook";

function Routes() {
  return (
    <BrowserRouter>
      {/*  */}
      <PrivateRoute exact path="/" component={MainPage} />
      <PrivateRoute path="/UpdateUser" component={UpdateUser} />
      {/*  */}
      <Route exact path="/Login" component={Login} />
      <Route exact path="/InsertUser" component={InsertUser} />
      <Route exact path="/ForgotPassword" component={ForgotPassword} />
      <Route exact path="/InsertBook" component={InsertBook} />
    </BrowserRouter>
  );
}

export default Routes;
