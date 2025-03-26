import "./xogitoExperiencePage.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

const XogitoExperiencePage = () => {
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
      className={`experience-window-xogito ${isNavigating ? "shrink" : ""} ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="accent-panel">
        <h1>
          My
          <br /> experience
        </h1>
      </div>
      <div className="content-panel-xogito">
        <img
          className="back-button"
          src={
            isDarkTheme
              ? "/teddyos/backArrowDark.svg"
              : "/teddyos/backArrowLight.svg"
          }
          alt="back button"
          onClick={handleBackClick}
        />
        <img
          className="action-buttons"
          src={
            isDarkTheme
              ? "/teddyos/actionButtonsDark.svg"
              : "/teddyos/actionButtonsLight.svg"
          }
          alt="action buttons"
        />
        <div className="experience-description">
          <span className="xogito-span">Xogito</span>
          <p className="xogito-p"> System Service Support Engineer </p>
          <img
            className="text-separator"
            src={
              isDarkTheme
                ? "/teddyos/textSeparatorDark.svg"
                : "/teddyos/textSeparatorLight.svg"
            }
            alt="text separator line"
          />
          <span className="date-xogito">09.2024 - Present</span>
          <p className="jd-xogito">
            • Provided infrastructure and administrative support to clients with
            the following services: <br></br>• AWS <br></br>• Microsoft 365
            <br></br>• Atlassian products <br></br>• On-prem Windows Server
            administration
            <br></br>• Monitoring of Linux and Solaris systems <br></br>•
            Created internal documentation on processes and use of software
          </p>
          <img
            className="xogito-logo"
            src={
              isDarkTheme
                ? "/teddyos/xogitoDark.svg"
                : "/teddyos/xogitoLight.svg"
            }
            alt="xogito logo"
          />
        </div>
      </div>
    </div>
  );
};

export default XogitoExperiencePage;
