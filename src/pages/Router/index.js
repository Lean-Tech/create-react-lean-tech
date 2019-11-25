import React from 'react';
import {Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from "../Auth/Login";

const Routes = () => (
    <Switch>
        <PublicRoute path={'/'} component={Login}/>
    </Switch>
);

export default Routes;
