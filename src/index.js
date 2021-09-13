import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Context";
import { AuthenticatedUserProvider } from "./context/AuthenticatedUser";
import { RegisteredUsersProvider } from "./context/RegisteredUsers";

ReactDOM.render(
  <ProductProvider>
    <AuthenticatedUserProvider>
      <RegisteredUsersProvider>
        <Router>
          <App />
        </Router>
      </RegisteredUsersProvider>
    </AuthenticatedUserProvider>
  </ProductProvider>,

  document.getElementById("root")
);

reportWebVitals();
