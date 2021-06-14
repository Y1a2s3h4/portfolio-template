import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skill";
import Projects from "./Components/Projects/Projects";
import ProjectsInfo from "./Helper/ProjectMoreInfo/ProjectsInfo";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/projectinfo/:id" component={ProjectsInfo} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Landing />
              <About />
              <Skills />
              <Projects />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
