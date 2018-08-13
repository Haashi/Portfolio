import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import Info from '../Info/Info';
import Edubg from '../Edubg/Edubg';
import Workexp from '../Workexp/Workexp';
import './Wrapper.css';

class Wrapper extends Component {
  render() {
    return (
        <div className="w3-content w3-margin-top w3-margin-bottom wrapper anim" style={{maxWidth:'1400px'}}>
        <div className="w3-row-padding">
        <Info />
            <Switch location={this.props.location}>
              <Route exact path="/edubg" component={Edubg}/>
              <Route exact path="/workexp" component={Workexp}/>
            </Switch>
        </div>
        </div>
    );
  }
}

export default withRouter(translate("common")(Wrapper));