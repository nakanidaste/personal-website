import React, { useContext } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import "./index.css";
import { Profile, RN, CSS, JS, HTML } from "../../img";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="a">
      <div className="a-left">
        <div
          className="a-card bg"
          style={{ backgroundColor: darkMode && "white" }}
        ></div>
        <div className="a-card">
          <img src={Profile} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Create mobile app to help make the work of others easier.
        </p>
        <p className="a-desc">
          My passion for programming started when I was in middle school editing
          my Android ROM phone, and immediately after graduation I went on to
          study software development, especially mobile development. In my spare
          time, I like to watch movies or TV shows, and at night I like to play
          games before going to bed. Ohh and one more thing, my internet name is
          Lullaby, so don't be confused if in almost all my social media and in
          game name, my name is not Samuel.
        </p>
        <div className="a-stack">
          <div className="a-stack-texts">
            <h2 className="a-stack-title">My skill</h2>
          </div>
          <div className="a-stack-img-wrapper">
            <Tippy content="Javascript">
              <img src={JS} alt="" className="a-stack-img" />
            </Tippy>
            <Tippy content="CSS">
              <img src={CSS} alt="" className="a-stack-img" />
            </Tippy>
            <Tippy content="HTML">
              <img src={HTML} alt="" className="a-stack-img" />
            </Tippy>
            <Tippy content="React Native">
              <img src={RN} alt="" className="a-stack-img" />
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
