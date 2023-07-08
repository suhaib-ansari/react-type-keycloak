import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import UserService from "./services/UserService";

import { Provider } from "react-redux";
import store from "./redux/store";

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <Provider store={store}>
      <App />
    // </Provider>
  );
};

UserService.initKeycloak(renderApp);
