import React from "react";

import TheHeader from "components/TheHeader/TheHeader";
import TheFooter from "components/TheFooter/TheFooter";

import Home from "pages/Home";
import About from "pages/About";
import Projects from "pages/Projects";

import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log("Route change!");

      const links = Array.from(
        document.getElementById("menu").getElementsByTagName("a")
      );

      links.forEach(link => {
        if (window.location.href.includes(link.getAttribute("href"))) {
          link.className += "current_link";
        } else {
          link.className = "";
        }
      });
    }
  }

  render() {
    return (
      <div className="app">
        <TheHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
        <TheFooter />
      </div>
    );
  }
}

export default withRouter(props => <App {...props} />);
