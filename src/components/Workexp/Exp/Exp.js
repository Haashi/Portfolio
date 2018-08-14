import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Exp.css';

class Exp extends Component {
  render() {
    const {t} = this.props;
    let date;
    let list=[[],[],[]];
    for(let skill in this.props.skillList){
        list[skill%3].push(<li key={skill}>{this.props.skillList[skill]}</li>);
    }
    let skillList=
    <div className="row">
        {[<ul className="custom" key={0}>{list[0]}</ul>]}
        {[<ul className="custom" key={1}>{list[1]}</ul>]}
        {[<ul className="custom" key={2}>{list[2]}</ul>]}  
    </div>;
    if(this.props.period){
        date= <h6 className="w3-text-light-green"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{t('workexp.'+this.props.id+'.startdate',{ framework: "react-i18next" })}</h6>
    }
    else{
         date= <h6 className="w3-text-light-green"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{t('workexp.'+this.props.id+'.startdate',{ framework: "react-i18next" })} - <span className={this.props.current ? "w3-tag w3-light-green w3-round" : ""}>{t('workexp.'+this.props.id+'.enddate',{ framework: "react-i18next" })}</span></h6>
    }
    return (
      <div>
        <div className="w3-container row exp anim">
          <div className="col-2 w3-hide-small">
            <a target="_blank" href={t('workexp.'+this.props.id+'.linkurl',{ framework: "react-i18next" })}>
            <img src={t('workexp.'+this.props.id+'.iconurl',{ framework: "react-i18next" })} className="w3-rounded w3-image vertical-center" alt={t('workexp.'+this.props.id+'.iconurl',{ framework: "react-i18next" })}/>
            </a>
          </div>
          <div className="col-1"/>
          <div className="col-9">
            <h5 className="w3-opacity">
              <b>{t('workexp.'+this.props.id+'.name',{ framework: "react-i18next" })}</b>
            </h5>
              {date}
            <p>{t('workexp.'+this.props.id+'.description',{ framework: "react-i18next" })}</p>
            {skillList}
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default translate("common")(Exp);