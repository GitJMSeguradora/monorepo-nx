import React, { useEffect, useState } from "react";
import { PageLoader } from "junto-ui";
import Auth from "./auth";
import { GTMServices } from "@monorepo-nx/services/gtm";

const withAuthentication = (AppComponent, urlOrigin, urlLogin) => {
  const auth = new Auth(urlOrigin, urlLogin);

  const BaseAppComponent = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      async function handleAuthentication() {
        const authenticated = await auth.handleAuthentication();
        setIsAuthenticated(authenticated);
      }

      handleAuthentication();
    }, []);

    useEffect(() => {
      function authGlobalDataLayer() {
        const { username } = auth.getUserData();
        GTMServices.createGlobalDataLayer("UserDataLayer", {
          login: username,
          name: "Usuário padrão"
        });
      }

      isAuthenticated && authGlobalDataLayer();
    }, [isAuthenticated]);

    return isAuthenticated ? (
      <AppComponent isAuthenticated={isAuthenticated} {...props} />
    ) : (
      <PageLoader />
    );
  };

  return BaseAppComponent;
};

export default withAuthentication;
