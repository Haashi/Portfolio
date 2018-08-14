import React, { Component } from 'react';
import { translate } from 'react-i18next';
import './Project.css';

class Project extends Component {
  render() {
    const {t} = this.props;

    const skillList = this.props.skillList!==undefined&&this.props.skillList.map( (skill) => {
      return(<li key={skill}><p>{skill}</p></li>)
    })
    const description = <div>
                        <div className="jumbotron w3-center w3-twothird">
                        <br/>
                        <h1 className="display-4">{ t('projects.'+this.props.id+'.name', { framework: "react-i18next" }) }</h1>
                        <p className="lead">{ t('projects.'+this.props.id+'.description1', { framework: "react-i18next" }) }</p>
                        <br/>
                        <hr className="my-4"/>
                        <br/>
                        <p>{ t('projects.'+this.props.id+'.description2', { framework: "react-i18next" }) }</p>
                        <p>{ t('projects.'+this.props.id+'.description3', { framework: "react-i18next" }) }</p>
                        </div>
                        </div>
    
    const technologies = <div>
    <div className="jumbotron w3-third w3-card w3-margin-top">
    <h2 className="display-5 w3-center">Technologies</h2>
    <br/>
    <ul>
      {skillList}
    </ul>
    </div>
    </div>
    return (
        <div className="w3-content w3-margin-top w3-margin-bottom" style={{maxWidth:'1400px'}}>
          <div className="w3-row-padding">
            {this.props.github&&<div className="w3-container">
            <a className="github-fork-ribbon left-top" target="_blank" href={this.props.github} data-ribbon={ t('projects.github', { framework: "react-i18next" }) }> </a>
            </div>}
            <div className="w3-container w3-card w3-white w3-margin-bottom w3-margin-left w3-margin-right">
              <div className="project anim">
                {description}
                {this.props.skillList&&technologies}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default translate("common")(Project);