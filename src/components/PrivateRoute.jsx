import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from './hoc/withAuth';

function PrivateRoute({
  component: Component,
  isAuthenticated,
  familyId,
  ...routeProps
}) {
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
  // return (
  //   <Route
  //     {...routeProps}
  //     render={props =>
  //       isAuthenticated ? (
  //         familyId ? (
  //           <Component {...props} />
  //         ) : (
  //           <Redirect to="/planning" />
  //         )
  //       ) : (
  //         <Redirect to="/" />
  //       )
  //     }
  //   />
  // );
}

export default withAuth(PrivateRoute);
