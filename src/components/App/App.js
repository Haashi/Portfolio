import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { translate } from "react-i18next";
import { withCookies } from "react-cookie";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const { cookies, i18n } = this.props;
    //checking for cookie language, if not found, use french as default language
    i18n.changeLanguage(
      cookies.get("lang") ||
        (navigator.language || navigator.userLanguage).substring(0, 2) === "fr"
        ? "fr"
        : "en"
    );
  }
  render() {
    //header need router handling to make tab active on bootstrap navbar
    const HeaderWithRouter = withRouter(Header);
    return (
      <div>
        <HeaderWithRouter />
        <Main />
      </div>
    );
  }
}

export default withCookies(translate("common")(App));
