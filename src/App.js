import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/Main';
import './App.css';


function App() {
  return (
    <div className="App">
      <Layout>
          <Header className="header-bg" title="Francisco José Camacho Maya" scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about-me">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer className="drawer-bg" title="Las cosas">
              <Navigation>
              <Link to="/resume">Resume</Link>
                  <Link to="/about-me">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
