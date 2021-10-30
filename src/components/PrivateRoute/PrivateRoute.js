import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = useAuth();
    if (isloading) {
        return <Spinner animation="border" variant="dark" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName || user?.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}>

        </Route>
    );
};

export default PrivateRoute;