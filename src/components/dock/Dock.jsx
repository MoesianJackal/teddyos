import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./dock.scss";

const Dock = () => {
  const navigate = useNavigate();
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const handleGreetingClick = () => {
    navigate("/");
  };

  return (
    <div className="dock">
      <a href="https://github.com/MoesianJackal">
        <img
          className="icon"
          src={
            isDarkTheme ? "/teddyos/githubDark.svg" : "/teddyos/githubLight.svg"
          }
          alt="Github"
          title="My Github page"
        />
      </a>
      <a href="https://www.linkedin.com/in/teodor-todorov-4506b1198/">
        <img
          className="icon"
          src={
            isDarkTheme
              ? "/teddyos/linkedinDark.svg"
              : "/teddyos/linkedinLight.svg"
          }
          alt="Linkedin"
          title="My LinkedIn profile"
        />
      </a>
      <a href="https://www.chess.com/member/ttodorov7">
        <img
          className="icon"
          src={
            isDarkTheme ? "/teddyos/chessDark.svg" : "/teddyos/chessLight.svg"
          }
          alt="Chess"
          title="Up for a game of chess?"
        />
      </a>
      <a href="https://www.instagram.com/teodortodorov12?igsh=MWY4ZjNhM2drYmg3bg==">
        <img
          className="icon"
          src={
            isDarkTheme ? "/teddyos/instaDark.svg" : "/teddyos/instaLight.svg"
          }
          alt="Instagram"
          title="My Instagram"
        />
      </a>
      <img className="separator" src="./separator.svg" alt="Separator" />
      <img
        className="icon"
        src={isDarkTheme ? "/teddyos/themeDark.svg" : "/teddyos/themeLight.svg"}
        alt="Theme"
        title="Click here to change the theme"
        onClick={toggleTheme}
      />
      <img
        className="icon"
        src={
          isDarkTheme
            ? "./teddyos/greetingDark.svg"
            : "/teddyos/greetingLight.svg"
        }
        alt="Greeting"
        onClick={handleGreetingClick}
        title="Bring back the greeter window"
      />
    </div>
  );
};

export default Dock;
