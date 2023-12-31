// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (!user) {
//           return children;
//         }
//         if (user) {
//           return (
//             <Redirect
//               to={{
//                 pathname: loggedInPath,
//               }}
//             />
//           );
//         }
//         return null;
//       }}
//     />
//   );
// }

// ====new one ====
import React from "react";
import { Route, Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      element={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Navigate to={loggedInPath} replace />;
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Navigate
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
