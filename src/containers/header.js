import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import Logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={Logo} />
          <Header.ButtonLink to={ROUTES.SIGN_IN}> SIGN_IN </Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
}
