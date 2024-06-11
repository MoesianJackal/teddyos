import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import StatusPanel from "./components/statuspanel/StatusPanel";
import Folders from "./components/folders/Folders";
import Dock from "./components/dock/Dock";
import Greeter from "./pages/greeter/Greeter";
import AboutMe from "./pages/aboutMe/AboutMe";
import MyExperience from "./pages/myExperience/MyExperience";
import MyProjects from "./pages/myProjects/MyProjects";
import GoogleExperiencePage from "./pages/experience/GoogleExperiencePage";
import MicrosoftExperiencePage from "./pages/experience/MicrosoftExperiencePage";
import EAExperiencePage from "./pages/experience/EAExperiencePage";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      {" "}
      {/* Wrap the Router with ThemeProvider */}
      <Router>
        <div>
          <section id="StatusPanel">
            <StatusPanel />
          </section>
          <section id="Folders">
            <Folders />
          </section>
          <section id="MainWindow">
            <Routes>
              <Route path="/myExperience" element={<MyExperience />} />
              <Route path="/myProjects" element={<MyProjects />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route
                path="/experience/google"
                element={<GoogleExperiencePage />}
              />
              <Route
                path="/experience/microsoft"
                element={<MicrosoftExperiencePage />}
              />
              <Route path="/experience/ea" element={<EAExperiencePage />} />
              <Route path="/" element={<Greeter />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </section>
          <section id="Dock">
            <Dock />
          </section>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
