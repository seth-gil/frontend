import React from 'react';
import {Route} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import NewProject from './pages/NewProject';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Container style={{marginTop: "15px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/projects/" component={Projects} />
          <Route path="/project/:id/" component={Project} />
          <Route path="/new/" component={NewProject} />
        </Container>
      </div>
    );
  }
}
