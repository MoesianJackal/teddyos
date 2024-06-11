import PropTypes from "prop-types";
import Greeter from "../greeter/Greeter";
import Folders from "../folders/Folders";

const ActiveContent = ({ activeComponent }) => {
  switch (activeComponent) {
    case "Greeter":
      return <Greeter />;
    case "Folders":
      return <Folders />;
    default:
      return <Greeter />;
  }
};

ActiveContent.propTypes = {
  activeComponent: PropTypes.string.isRequired,
};

export default ActiveContent;
