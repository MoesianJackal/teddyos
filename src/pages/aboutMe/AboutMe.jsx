import "./aboutMe.scss";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const AboutMe = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`about-window ${isDarkTheme ? "dark-theme" : "light-theme"}`}
    >
      <div className="about-accent-panel">
        <h1>
          About
          <br /> Me
        </h1>
      </div>
      <div className="about-content-panel">
        <img
          className="action-buttons"
          src={
            isDarkTheme ? "./actionButtonsDark.svg" : "./actionButtonsLight.svg"
          }
          alt="action buttons"
        />
        <div className="about-text-container">
          <p>
            I am a dedicated and versatile professional with extensive
            experience in technical support and development.
            <br />
            <br />I hold a strong passion for learning new technologies and
            developing innovative solutions to enhance user experience and
            business performance.<br></br>
            <br></br> I am a team player, always eager to tackle new challenges
            and make meaningful contributions to my team and projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
