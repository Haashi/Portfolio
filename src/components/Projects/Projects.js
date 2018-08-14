import React, { Component } from "react";
import { translate } from "react-i18next";
import Project from "./Project/Project";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div
        className="w3-content w3-margin-top w3-margin-bottom projects anim"
        style={{ maxWidth: "1400px" }}
      >
        <Project
          id="site"
          skillList={["ReactJS", "Bootstrap", "i18n"]}
          github="https://github.com/Haashi/www.haashi.fr"
        />
        <Project
          id="screepsmod-httpwelcome"
          skillList={["NodeJS"]}
          github="https://github.com/Haashi/screepsmod-httpwelcome"
        />
        <Project
          id="snake"
          skillList={["JavaScript", "NodeJS", "(ReactJS)", "socket.io"]}
          github="https://github.com/Haashi/SnakeNode"
        />
        <Project
          id="basemod"
          skillList={["Java", "Reflection"]}
          github="https://github.com/daviscook477/BaseMod"
        />
        <Project
          id="otrs"
          skillList={["Pearl", "HTML/CSS"]}
          github="https://github.com/Haashi/OTRSTicketStateHistory"
        />
        <Project id="compiler" skillList={["Java", "JCas"]} />
        <Project id="httpserver" skillList={["HTTP", "C"]} />
        <Project id="mips" skillList={["C", "Assembly"]} />
      </div>
    );
  }
}

export default translate("common")(Projects);
