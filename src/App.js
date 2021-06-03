import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectsPage from './pages/projects';
import GamesPage from './pages/gamepage';
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
              <Route path="/games" component={GamesPage}></Route>
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
        <Router>
          <div>
            <PageButtons />
            <Switch>
              <Route path="/projects" component={ProjectsPage} ></Route>
              <Route path="/games" component={GamesPage}></Route>
            </Switch>
          </div>
        </Router>
        
        <ContactSection/>
      </div>
);
export default App;

//External device testing
//Laptop ip: 192.168.1.90:3000
//Desktop ip: 