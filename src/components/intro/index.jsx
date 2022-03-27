import React, { useContext } from "react";
import "./index.css";
//import Me from "../../img/profile.jpg";
import Lottie from "react-lottie";
import Animation from "../../utils/animation.json";
import { ThemeContext } from "../../context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
            I'm a full stack mobile developer and when making mobile apps I use
            React Native for the frontend and Firebase for the backend.Why did I
            choose to use React Native? Because being able to write 1 code for
            all platforms is a big advantage of using React Native for me. Ohh
            and one more thing, i love javascript ❤️❤️.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div
          className="i-bg"
          style={{ backgroundColor: darkMode && "white" }}
        ></div>
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        {/* <img src={Me} alt="" className="i-img"></img> */}
      </div>
    </div>
  );
};

export default Intro;
