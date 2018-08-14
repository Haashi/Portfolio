import React from "react";
import ReactDOM from "react-dom";
import "./include/bootstrap";
import "w3-css/w3.css";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import "font-awesome/css/font-awesome.min.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import en from "./res/translations/en.json";
import fr from "./res/translations/fr";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "fr",
  resources: {
    en: {
      common: en
    },
    fr: {
      common: fr
    }
  }
});

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById("root")
);
registerServiceWorker();
