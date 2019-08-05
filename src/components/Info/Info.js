import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { translate } from "react-i18next";
import "./Info.css";

class Info extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="w3-third">
        <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom w3-margin-left">
          <div className="w3-display-container">
            <img src="profile.jpg" style={{ width: "100%" }} alt="Avatar" />
          </div>
          <div className="w3-container">
            <hr />
            <h2>Baptiste "Haashi" Pontanier</h2>
            <hr />
            {this.props.expanded ? (
              <div
                className={
                  "w3-animate-top" +
                  (this.props.location.pathname.startsWith("/edubg")
                    ? ""
                    : " w3-hide-small")
                }
              >
                <p>
                  <i className="fa fa-briefcase fa-fw w3-large w3-text-light-blue" />
                  {t("info.current", { framework: "react-i18next" })}
                </p>
                <p>
                  <i className="fa fa-home fa-fw w3-large w3-text-light-blue" />
                  {t("info.place", { framework: "react-i18next" })}
                </p>
                <p>
                  <i className="fa fa-envelope fa-fw w3-large w3-text-light-blue" />
                  baptiste.pontanier@laposte.net
                </p>
                <p>
                  <i className="fa fa-phone fa-fw w3-large w3-text-light-blue" />
                  +33642123867
                </p>
                <hr />
                <p className="w3-large w3-text-theme">
                  <b>
                    <i className="fa fa-globe fa-fw w3-text-light-blue" />
                    {t("info.languages.tag", { framework: "react-i18next" })}
                  </b>
                </p>
                <p>{t("info.languages.fr", { framework: "react-i18next" })}</p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-light-blue"
                    style={{ height: "24px", width: "100%" }}
                  />
                </div>
                <br />
                <p>
                  {t("info.languages.en", { framework: "react-i18next" })}{" "}
                  (TOEIC Score : 965)
                </p>
                <div className="w3-light-grey w3-round-xlarge">
                  <div
                    className="w3-round-xlarge w3-light-blue"
                    style={{ height: "24px", width: "80%" }}
                  />
                </div>
                <br />
                <hr />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(translate("common")(Info));
