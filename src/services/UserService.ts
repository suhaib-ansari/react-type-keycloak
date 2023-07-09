import Keycloak, { KeycloakInstance } from "keycloak-js";

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_AUTH_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

const _kc: KeycloakInstance = Keycloak(keycloakConfig);

const initKeycloak = (onAuthenticationSuccess: any) => {
  _kc
    .init({
      onLoad: "login-required",
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not Authenticated!");
        // doLogin();
        setInterval(updateToken, 10000)
      }
      onAuthenticationSuccess();
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const dologout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = () => {
  _kc
    .updateToken(5)
    .then((refreshed) => {
      if (refreshed) {
        console.log("token refreshed .........")
        console.log("refreshed token ---<>", _kc.token);
      }
    })
    .catch(doLogin);
};

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles: string[]) =>
  roles.some((role: string) => _kc.hasResourceRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  dologout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};

export default UserService;
