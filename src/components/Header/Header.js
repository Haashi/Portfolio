import React, { Component } from "react";
import { Link } from "react-router-dom";
import { translate } from "react-i18next";
import { withCookies } from "react-cookie";
import "./Header.css";

class Header extends Component {
  changeLanguage = () => {
    const { i18n, cookies } = this.props;
    if (i18n.language === "fr") {
      i18n.changeLanguage("en");
      cookies.set("lang", "en", {
        path: "/"
      });
    } else {
      i18n.changeLanguage("fr");
      cookies.set("lang", "fr", {
        path: "/"
      });
    }
  };

  render() {
    const { t } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w3-card">
        <div className="col-2">
          <Link to="/">
            <img alt="logo" className="logo" src="/logo.gif" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to="/edubg"
                className={
                  "nav-link " +
                  (this.props.location.pathname.startsWith("/edubg")
                    ? "active"
                    : "")
                }
              >
                {t("edubg.tab", { framework: "react-i18next" })}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/workexp"
                className={
                  "nav-link " +
                  (this.props.location.pathname.startsWith("/workexp")
                    ? "active"
                    : "")
                }
              >
                {t("workexp.tab", { framework: "react-i18next" })}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={
                  "nav-link " +
                  (this.props.location.pathname.startsWith("/projects")
                    ? "active"
                    : "")
                }
              >
                {t("projects.tab", { framework: "react-i18next" })}
              </Link>
            </li>
          </ul>
          <div className="nav-item dropdown">
            <i
              className="fa fa-download fa-2x network-icon nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href={t("download.resumelink", {
                  framework: "react-i18next"
                })}
                download
              >
                {t("download.resume", { framework: "react-i18next" })}
              </a>
              <div className="dropdown-divider" />
            </div>
          </div>
          <li className="nav-link">
            <a className="network-icon" href="https://github.com/Haashi">
              <i className="fa fa-github fa-2x" />
            </a>
            <a
              className="network-icon"
              href="https://www.linkedin.com/in/baptiste-pontanier-b4ba0512b/"
            >
              <i className="fa fa-linkedin fa-2x" />
            </a>
          </li>
          <button
            className="btn btn-secondary"
            onClick={this.changeLanguage}
            type="button"
          >
            {t("languageButton", { framework: "react-i18next" })}
          </button>
        </div>
      </nav>
    );
  }
}

export default withCookies(translate("common")(Header));
