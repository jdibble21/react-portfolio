import React, { Component } from "react";
import {HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProjectsPage from './pages/projects';
import GamesPage from './pages/gamepage';
import NavbarCustom from './components/navbar';
import ProfileBio from './components/profile_bio';
import DetailsSection from './components/details_section';
import PageButtons from './components/buttons';
import ContactSection from './components/contact';
import NotFoundPage from './components/not_found';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <NavbarCustom/>
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="react-portfolio/#/homepage" component={HomePage}></Route>
              <Route path="react-portfolio/#/projects" component={ProjectsPage} ></Route>
              <Route path="react-portfolio/#/games" component={GamesPage}></Route>
              <Route path="/contact" component={ContactSection}></Route>
              <Route path="404" component={NotFoundPage}></Route>
              <Redirect to="404"></Redirect>
            </Switch>
          </div>
      </div>
    );
  }
}

const HomePage = () => (
      <div>
        <ProfileBio/>
        <DetailsSection/>
        <HashRouter>
          <div>
            <PageButtons />
            <Switch>
              <Route path="/projects" component={ProjectsPage} ></Route>
              <Route path="/games" component={GamesPage}></Route>
            </Switch>
          </div>
        </HashRouter>
        <ContactSection/>
        <Footer/>
      </div>
);


export default App;

//External device testing
//Laptop ip: 192.168.1.90:3000
//Desktop ip: 192.168.1.68:3000