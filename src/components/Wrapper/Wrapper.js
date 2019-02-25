import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { translate } from "react-i18next";
import Info from "../Info/Info";
import Edubg from "../Edubg/Edubg";
import Workexp from "../Workexp/Workexp";
import Home from "../Home/Home";
import "./Wrapper.css";

class Wrapper extends Component {
  render() {
    console.log(this.props.location.pathname);
    return (
      <div
        className="w3-content w3-margin-top w3-margin-bottom wrapper anim"
        style={{ maxWidth: "1400px" }}
      >
        <div className="w3-row-padding">
          {this.props.location.pathname === "/" ? <Info /> : <Info expanded />}
          <Switch location={this.props.location}>
            <Route exact path="/edubg" component={Edubg} />
            <Route exact path="/workexp" component={Workexp} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(translate("common")(Wrapper));
