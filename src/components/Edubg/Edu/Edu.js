import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Edu.css';

class Edu extends Component {
  render() {
    const {t} = this.props;
    return (
      <div>
        <div className="w3-container row edu anim">
          <div className="col-2 w3-hide-small">
            <a target="_blank" href={t('edubg.'+this.props.id+'.linkurl',{ framework: "react-i18next" })}>
              <img src={t('edubg.'+this.props.id+'.iconurl',{ framework: "react-i18next" })} className="w3-rounded w3-image vertical-center" alt={t('edubg.'+this.props.id+'.iconurl',{ framework: "react-i18next" })}/>
            </a>
          </div>
        <div className="col-1"/>
        <div className="col-9">
          <h5 className="w3-opacity">
            <b>{t('edubg.'+this.props.id+'.name',{ framework: "react-i18next" })}</b>
          </h5>
          <h6 className="w3-text-light-green">
            <i className="fa fa-calendar fa-fw w3-margin-right"></i>
                {t('edubg.'+this.props.id+'.startdate',{ framework: "react-i18next" })} - <span className={this.props.current ? "w3-tag w3-light-green w3-round" : ""}>{t('edubg.'+this.props.id+'.enddate',{ framework: "react-i18next" })}</span>
            </h6>
          <p>{t('edubg.'+this.props.id+'.description',{ framework: "react-i18next" })}</p>
        </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default translate("common")(Edu);