import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProjectsPage from './pages/projects';
import NavbarCustom from './components/navbar';
import BackgroundImage from './components/background_image';
import BioSection from './components/bio_section';
import DetailsSection from './components/details_section';
import PageButtons from './components/buttons';
import ContactSection from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavbarCustom/>
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/projects" component={ProjectsPage} ></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const HomePage = () => (
      <div>
        <BackgroundImage/>
        <BioSection/>
        <DetailsSection/>
        <PageButtons />
        <ContactSection/>
      </div>
);
export default App;