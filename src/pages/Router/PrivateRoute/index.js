import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import API from '../../../API'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
               render={
                   props => API.authService.isAuthenticated() ? <Component {...props}/>
                       : <Redirect to={'/login'}/>}
        />);
}

export default PrivateRoute;

