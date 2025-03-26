import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./myExperience.scss";
import { ThemeContext } from "../../ThemeContext";

const MyExperience = () => {
  const { isDarkTheme } = useContext(ThemeContext); // Use context to get the theme
  const [positions, setPositions] = useState(() => {
    const savedPositions = localStorage.getItem("positions");
    return savedPositions
      ? JSON.parse(savedPositions)
      : ["top", "middle", "bottom, bottom"];
  });
  const [clickedIndex, setClickedIndex] = useState(null); // State to track the clicked card
  const [reverse, setReverse] = useState(false); // State to track reverse animation
  const cardClasses = ["card1", "card2", "card3", "card4"]; // Array of card classes
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.reverse) {
      setReverse(true);
      setClickedIndex(null);
      setTimeout(() => {
        setReverse(false);
      }, 160); // Duration of the reverse animation
    }
  }, [location.state]);

  useEffect(() => {
    // Save positions to local storage whenever they change
    localStorage.setItem("positions", JSON.stringify(positions));
  }, [positions]);

  // const handleCardClick = (index) => {
  //   if (positions[index] === "middle") {
  //     setPositions([positions[1], positions[2], positions[0]]);
  //   } else if (positions[index] === "bottom") {
  //     const routes = [
  //       "/experience/google",
  //       "/experience/microsoft",
  //       "/experience/ea",
  //     ];
  //     const selectedRoute = routes[index];
  //     setClickedIndex(index);
  //     setTimeout(() => {
  //       navigate(selectedRoute);
  //     }, 160); // Delay navigation to allow animation to complete
  //   }
  // };
  const handleCardClick = (index) => {
    if (positions[index] === "middle") {
      setPositions([positions[1], positions[2], positions[3], positions[0]]);
    } else if (positions[index] === "bottom") {
      const routes = [
        "/experience/google",
        "/experience/microsoft",
        "/experience/ea",
        "/experience/xogito",
      ];
      const selectedRoute = routes[index];
      setClickedIndex(index);
      setTimeout(() => {
        navigate(selectedRoute);
      }, 160);
    }
  };

  return (
    <div
      className={`experience-window ${
        isDarkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="accent-panel">
        <h1>
          My
          <br /> experience
        </h1>
      </div>
      <div className="content-panel">
        <img
          className="action-buttons"
          src={
            isDarkTheme
              ? "/teddyos/actionButtonsDark.svg"
              : "/teddyos/actionButtonsLight.svg"
          }
          alt="action buttons"
        />
        <div className={`carousel-container ${reverse ? "reverse" : ""}`}>
          <div
            className={`card ${positions[0]} ${cardClasses[0]} ${
              clickedIndex === 0 ? "expand" : ""
            }`}
            onClick={() => handleCardClick(0)}
          >
            <span>Webhelp</span>
            <p>Developer Support Engineer for Google Cloud</p>
            <img
              className="google-logo"
              src={
                isDarkTheme
                  ? "/teddyos/googleDark.svg"
                  : "/teddyos/googleLight.svg"
              }
              alt="Google logo"
            />
          </div>
          <div
            className={`card ${positions[1]} ${cardClasses[1]} ${
              clickedIndex === 1 ? "expand" : ""
            }`}
            onClick={() => handleCardClick(1)}
          >
            <span>Microsoft</span>
            <p>AI & IoT Developer Support Engineer</p>
            <img
              className="microsoft-logo"
              src={
                isDarkTheme ? "/teddyos/msftDark.svg" : "/teddyos/msftLight.svg"
              }
              alt="Microsoft logo"
            />
          </div>
          <div
            className={`card ${positions[2]} ${cardClasses[2]} ${
              clickedIndex === 2 ? "expand" : ""
            }`}
            onClick={() => handleCardClick(2)}
          >
            <span>Electronic Arts</span>
            <p>QV Tester</p>
            <img
              className="ea-logo"
              src={isDarkTheme ? "/teddyos/eaDark.svg" : "/teddyos/eaLight.svg"}
              alt="EA logo"
            />
          </div>
          <div
            className={`card ${positions[3]} ${cardClasses[3]} ${
              clickedIndex === 3 ? "expand" : ""
            }`}
            onClick={() => handleCardClick(3)}
          >
            <span>Xogito</span>
            <p>System Service Support Engineer</p>
            <img
              className="xogito-logo"
              src={
                isDarkTheme
                  ? "/teddyos/xogitoDark.svg"
                  : "/teddyos/xogitoLight.svg"
              }
              alt="Xogito logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
