import Navbar from "./Pages/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skill";
import Projects from "./Pages/Projects/Projects";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
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
