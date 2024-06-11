import { useContext } from "react";
import "./greeter.scss";
import { ThemeContext } from "../../ThemeContext";

const Greeter = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`greeterWindow ${isDarkTheme ? "dark-theme" : "light-theme"}`}
    >
      <div className="accentPanel">
        <h1>hi</h1>
      </div>
      <div className="textPanel">
        <h1>
          My name is Teodor, I’m an Azure Cloud Engineer. Feel free to have a
          look at my website.
        </h1>
      </div>
      <div className="picPanel">
        <img
          className="action-buttons-greeter"
          src={
            isDarkTheme ? "./actionButtonsDark.svg" : "./actionButtonsLight.svg"
          }
          alt="Action buttons"
        />
        <img
          className="picMe"
          src={isDarkTheme ? "./picDark.png" : "./picLight.png"}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Greeter;
