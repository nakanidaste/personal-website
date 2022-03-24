import React from "react";
import "./index.css";
import Me from "../../img/profile.jpg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h2 className="i-name">Samuel Yosep Salom</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Android Developer</div>
              <div className="i-title-item">IOS Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Cryptocurrency</div>
              <div className="i-title-item">Gamer</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={Me} alt="" className="i-img"></img> */}
      </div>
    </div>
  );
};

export default Intro;
