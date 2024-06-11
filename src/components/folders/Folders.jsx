import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./folders.scss";

const Folders = () => {
  const [openFolder, setOpenFolder] = useState(null); // State to track the open folder
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (folder, path) => {
    if (openFolder === folder) {
      setOpenFolder(null); // Close the folder if it's already open
      navigate("/");
    } else {
      setOpenFolder(folder); // Open the new folder
      navigate(path);
    }
  };

  return (
    <div className="folders">
      <a
        href="#My Experience"
        onClick={() => handleNavigation("experience", "/myExperience")}
      >
        <img
          src={
            openFolder === "experience"
              ? "./folderOpen.svg"
              : "./folderClosed.svg"
          }
          alt="My Experience"
        />{" "}
        My Experience
      </a>
      <a
        href="#My Projects"
        onClick={() => handleNavigation("projects", "/myProjects")}
      >
        <img
          src={
            openFolder === "projects"
              ? "./folderOpen.svg"
              : "./folderClosed.svg"
          }
          alt="My Projects"
        />{" "}
        My Projects
      </a>
      <a href="#About Me" onClick={() => handleNavigation("about", "/aboutMe")}>
        <img
          src={
            openFolder === "about" ? "./folderOpen.svg" : "./folderClosed.svg"
          }
          alt="About Me"
        />{" "}
        About Me
      </a>
    </div>
  );
};

export default Folders;
