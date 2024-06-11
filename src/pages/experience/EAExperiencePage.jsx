import "./eaExperiencePage.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

const EAExperiencePage = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const { isDarkTheme } = useContext(ThemeContext);

  const handleBackClick = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate("/myExperience", { state: { reverse: true } });
    }, 160);
  };

  return (
    <div
      className={`experience-window-ea ${isNavigating ? "shrink" : ""} ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="accent-panel">
        <h1>
          My
          <br /> experience
        </h1>
      </div>
      <div className="content-panel-ea">
        <img
          className="back-button"
          src={isDarkTheme ? "./backArrowDark.svg" : "./backArrowLight.svg"}
          alt="back button"
          onClick={handleBackClick}
        />
        <img
          className="action-buttons"
          src={
            isDarkTheme ? "./actionButtonsDark.svg" : "./actionButtonsLight.svg"
          }
          alt="action buttons"
        />
        <div className="experience-description">
          <span className="ea-span">Electronic Arts</span>
          <p className="ea-p">QV Tester</p>
          <img
            className="text-separator"
            src={
              isDarkTheme
                ? "./textSeparatorDark.svg"
                : "./textSeparatorLight.svg"
            }
            alt="text separator line"
          />
          <span className="date-ea">04.2022 - 09.2023</span>
          <p className="jd-ea">
            • Tested, analyzed, sought out and recorded bugs in a systematic and
            creative way during the development of the product. <br />• Provided
            feedback during the product’s development and suggested
            improvements. <br />• When assigned to other testing teams, worked
            in tandem with other colleagues to test issues reported in Jira.
          </p>
          <img
            className="ea-logo"
            src={isDarkTheme ? "./eaDark.svg" : "./eaLight.svg"}
            alt="ea logo"
          />
        </div>
      </div>
    </div>
  );
};

export default EAExperiencePage;
