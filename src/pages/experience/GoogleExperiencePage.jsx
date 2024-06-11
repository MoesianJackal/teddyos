import "./googleExperiencePage.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

const GoogleExperiencePage = () => {
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
      className={`experience-window-google ${isNavigating ? "shrink" : ""} ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="accent-panel">
        <h1>
          My
          <br /> experience
        </h1>
      </div>
      <div className="content-panel-google">
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
          <span className="google-span">Webhelp</span>
          <p className="google-p">
            {" "}
            Developer Support Engineer for Google Cloud
          </p>
          <img
            className="text-separator"
            src={
              isDarkTheme
                ? "./textSeparatorDark.svg"
                : "./textSeparatorLight.svg"
            }
            alt="text separator line"
          />
          <span className="date-google">10.2021 - 03.2022</span>
          <p className="jd-google">
            • Assisted developers in resolving complex issues such as SSO/SAML
            implementations, Apps Script, and Google Workspace APIs. <br></br>•
            Provided expert troubleshooting for general issues in Google Cloud
            and the Google Admin console, ensuring seamless operations.
          </p>
          <img
            className="google-logo"
            src={isDarkTheme ? "./googleDark.svg" : "./googleLight.svg"}
            alt="google logo"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleExperiencePage;
