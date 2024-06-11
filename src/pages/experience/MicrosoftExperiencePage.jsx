import "./microsoftExperiencePage.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

const MicrosoftExperiencePage = () => {
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
      className={`experience-window-microsoft ${isNavigating ? "shrink" : ""} ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="accent-panel">
        <h1>
          My
          <br /> experience
        </h1>
      </div>
      <div className="content-panel-microsoft">
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
          <span className="microsoft-span">Microsoft</span>
          <p className="microsoft-p"> AI & IoT Developer Support Engineer </p>
          <img
            className="text-separator"
            src={
              isDarkTheme
                ? "./textSeparatorDark.svg"
                : "./textSeparatorLight.svg"
            }
            alt="text separator line"
          />
          <span className="date-microsoft">04.2022 - 09.2023</span>
          <p className="jd-microsoft">
            • Provided support to developers in troubleshooting and implementing
            Azure AI Services (APIs, SDKs and Docker containers) and Azure
            OpenAI. <br></br>• Resolved IoT device and Azure platform issues in
            production environments, including IoT Hub, IoT Central, DPS, and
            IoT Edge devices. <br></br>• General consulting for product
            utilization and underlying concepts, facilitating effective usage of
            Azure products.
          </p>
          <img
            className="microsoft-logo"
            src={isDarkTheme ? "./msftDark.svg" : "./msftLight.svg"}
            alt="microsoft logo"
          />
        </div>
      </div>
    </div>
  );
};

export default MicrosoftExperiencePage;
