import "bootstrap/dist/css/bootstrap.min.css"; //react-bootstrap
import "./App.css";
import { NavbarMe } from "./Components/NavbarMe/NavbarMe";
import { HomeMe } from "./Components/HomeMe/HomeMe";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { ServicesMe } from "./Components/ServicesMe/ServicesMe";
import { ProjectsMe } from "./Components/ProjectsMe/ProjectsMe";
import { ContactMe } from "./Components/ContactMe/ContactMe";

function App() {
  return (
    <div className="whole">
      <NavbarMe />
      <HomeMe />
      <AboutMe />
      <ServicesMe />
      <ProjectsMe />
      <ContactMe />
    </div>
  );
}
export default App;
