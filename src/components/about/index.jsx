import React, { useContext } from "react";
import "./index.css";
import Me from "../../img/profile.jpg";
import Award from "../../img/piagam.png";
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
          <img src={Me} alt="" className="a-img" />
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
          games before going to bed. Ohh one more thing, my internet name is
          Lullaby, so don't be confused if in almost all my social media and in
          game name, my name is not Samuel.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Title Award</h4>
            <p className="a-award-desc">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
