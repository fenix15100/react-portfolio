import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Router from './components/Router';
import './App.css';


function App() {
  return (
    <div className="App">
      <Layout>
          <Header className="header-bg" title="My Portfolio" scroll>
              <Navigation>
                  <Link to="/react-portfolio/">Home</Link>
                  <Link to="/react-portfolio/resume">Resume</Link>
                  <Link to="/react-portfolio/about-me">About Me</Link>
                  <Link to="/react-portfolio/projects">Projects</Link>
                  <Link to="/react-portfolio/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer className="drawer-bg" title="Menu">
              <Navigation>
                  <Link to="/react-portfolio/">Home</Link>
                  <Link to="/react-portfolio/resume">Resume</Link>
                  <Link to="/react-portfolio/about-me">About Me</Link>
                  <Link to="/react-portfolio/projects">Projects</Link>
                  <Link to="/react-portfolio/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <Router/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
