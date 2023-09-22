import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_IN}
            />
          }
        />

        <Route path="/signup" element={<SignUp />} />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.SIGN_UP}
            />
          }
        />

        <Route path={ROUTES.BROWSE} element={<Browse />} />
        <Route
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user} path={ROUTES.BROWSE}>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.BROWSE}
              path={ROUTES.HOME}
            />
          }
        />
      </Routes>
    </Router>
  );
}
