import { useState, useContext } from "react";
import "./myProjects.scss";
import { ThemeContext } from "../../ThemeContext";

const MyProjects = () => {
  const [positions, setPositions] = useState(["top", "middle", "bottom"]);
  const { isDarkTheme } = useContext(ThemeContext);

  const handleCardClick = (index) => {
    if (positions[index] === "middle") {
      setPositions([positions[1], positions[2], positions[0]]);
    } else if (positions[index] === "bottom") {
      const cardLinks = [
        "https://github.com/MoesianJackal",
        "https://github.com/MoesianJackal",
        "https://github.com/MoesianJackal",
      ];
      window.open(cardLinks[index], "_blank");
    }
  };

  return (
    <div
      className={`my-projects-window ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="my-projects-accent-panel">
        <h1>
          My
          <br /> Projects
        </h1>
      </div>
      <div className="my-projects-content-panel">
        <img
          className="action-buttons"
          src={
            isDarkTheme ? "./actionButtonsDark.svg" : "./actionButtonsLight.svg"
          }
          alt="action buttons"
        />
        <div className="my-projects-carousel-container">
          <div
            className={`my-projects-card my-projects-${positions[0]} my-projects-card1`}
            onClick={() => handleCardClick(0)}
          >
            <span>CI / CD Pipeline</span>
            {/* <p>Project for deploying and managing infrastructure</p> */}
            <p>Work in progress</p>
            <img
              className="terraform-logo"
              src={isDarkTheme ? "./terraformDark.svg" : "./terraformLight.svg"}
              alt="Terraform Logo"
            />
          </div>
          <div
            className={`my-projects-card my-projects-${positions[1]} my-projects-card2`}
            onClick={() => handleCardClick(1)}
          >
            <span>Dune II</span>
            {/* <p>Browser-based version of the classic RTS</p> */}
            <p>Work in progress</p>

            <img
              className="dune-logo"
              src={isDarkTheme ? "./gamepadDark.svg" : "./gamepadLight.svg"}
              alt="gamepad"
            />
          </div>
          <div
            className={`my-projects-card my-projects-${positions[2]} my-projects-card3`}
            onClick={() => handleCardClick(2)}
          >
            <span>Codec</span>
            {/* <p>Video calls for the Metal Gear Solid fans</p> */}
            <p>Work in progress</p>

            <img
              className="codec-logo"
              src={isDarkTheme ? "./codecDark.svg" : "./codecLight.svg"}
              alt="codec frequency"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
