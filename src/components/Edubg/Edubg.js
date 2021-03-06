import React, { Component } from "react";
import { translate } from "react-i18next";
import Edu from "./Edu/Edu";
import "./Edubg.css";

class Edubg extends Component {
  render() {
    const { t } = this.props;
    return (
      <div //using twothird because info component use the w3-third
        className="w3-twothird edubg anim"
      >
        <div className="w3-container w3-card w3-white w3-margin-bottom w3-margin-left">
          <h2 //small padding so it look better
            className="w3-text-grey w3-padding-16 w3-center"
          >
            <i //cute font-awesome degree icon
              className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-light-blue"
            />{" "}
            {t("edubg.tab", {
              framework: "react-i18next"
            })}{" "}
          </h2>{" "}
          <hr />
          <Edu //edu component to render all the informations
            id="esisar"
          />{" "}
          <Edu id="cpge" /> <Edu id="bac" />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default translate("common")(Edubg);
