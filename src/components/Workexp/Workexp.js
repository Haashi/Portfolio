import React, { Component } from "react";
import { translate } from "react-i18next";
import Exp from "./Exp/Exp";
import "./Workexp.css";

class Workexp extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="w3-twothird workexp anim">
        <div className="w3-container w3-card w3-white w3-margin-bottom w3-margin-left">
          <h2 className="w3-text-grey w3-padding-16 w3-center">
            <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-light-blue" />
            {t("workexp.tab", { framework: "react-i18next" })}
          </h2>
          <hr />
          <Exp id="cirilgroup" current skillList={[]} />
          <Exp
            id="synaaps"
            skillList={["Monitoring", "Nagios", "Centreon", "SNMP"]}
          />
          <Exp
            id="planifico"
            skillList={["Android/Java", "iOS/Swift", "ElectronJS", "WebView"]}
          />
          <Exp
            id="carlsoftware"
            skillList={["Java", "Python", "SQL", "CassandraDB", "BIM", "IFC"]}
          />
          <Exp
            id="fcnet"
            period
            skillList={["Perl", "HTML", "CSS", "JavaScript"]}
          />
          <Exp
            id="polysecurite"
            period
            skillList={["RF", "Wi-Fi", "IP Camera"]}
          />
        </div>
      </div>
    );
  }
}

export default translate("common")(Workexp);
