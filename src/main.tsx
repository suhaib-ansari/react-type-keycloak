import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import UserService from "./services/UserService";

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <Provider store={store}>
      <App />
    // </Provider>
  );
};

UserService.initKeycloak(renderApp);
