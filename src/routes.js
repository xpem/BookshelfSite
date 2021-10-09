import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateUser from "./pages/User/CreateUser";
import Login from "./pages/User/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/User/ForgotPassword";
import UpdateUser from "./pages/User/UpdateUser";

function Routes() {
  return (
    <BrowserRouter>
      {/*  */}
      <PrivateRoute exact path="/" component={MainPage} />
      <PrivateRoute path="/UpdateUser" component={UpdateUser} />
      {/*  */}
      <Route exact path="/Login" component={Login} />
      <Route exact path="/CreateUser" component={CreateUser} />
      <Route exact path="/ForgotPassword" component={ForgotPassword} />
    </BrowserRouter>
  );
}

export default Routes;
