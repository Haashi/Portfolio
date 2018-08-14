import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { translate } from "react-i18next";
import Home from "../Home/Home";
import Wrapper from "../Wrapper/Wrapper";
import Projects from "../Projects/Projects";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <Switch location={this.props.location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/(edubg|workexp|)/" component={Wrapper} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    );
  }
}

export default withRouter(translate("common")(Main));
