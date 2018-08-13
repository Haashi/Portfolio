import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
  render() {
    const {t} = this.props;

    const welcome = <div className="w3-container w3-card w3-white w3-margin-bottom w3-margin-left w3-margin-right">
    <div className="jumbotron w3-center">
     <h1 className="display-4">{ t('home.welcome', { framework: "react-i18next" }) }</h1>
     <p className="lead">{ t('home.me', { framework: "react-i18next" }) }</p>
     <br/>
     <hr className="my-4"/>
     <br/>
     <p>{ t('home.description1', { framework: "react-i18next" }) }</p>
     <p>{ t('home.description2', { framework: "react-i18next" }) }</p>
     <p>{ t('home.description3', { framework: "react-i18next" }) }</p>
     </div>
    </div>

const internship=<div>
            <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom w3-margin-left w3-margin-right">
            <div className="jumbotron w3-center">
            <h1 className="display-4">{ t('home.internship.name', { framework: "react-i18next" }) }</h1>
            <p className="lead">{ t('home.internship.description1', { framework: "react-i18next" }) }</p>
            <hr className="my-4"/>
            <br/>
            <p>{ t('home.internship.description2', { framework: "react-i18next" }) }</p>
            <Link className="btn btn-secondary btn-lg" to="/edubg" role="button">{ t('home.learnmore', { framework: "react-i18next" }) }</Link>
            </div>
            </div>
            
            </div>
            <div className="w3-twothird">
            <p> </p>
            </div>
            </div>

    return (
      <div className="w3-content w3-margin-top w3-margin-bottom home anim" style={{maxWidth:'1400px'}}>
        <div className="w3-row-padding">
        {welcome}
        {internship}    
        </div>
      </div>
    );
  }
}

export default translate("common")(Home);