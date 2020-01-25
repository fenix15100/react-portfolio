import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/Main'


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header title="Francisco José Camacho Maya" scroll>
              <Navigation>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
              </Navigation>
          </Header>
          <Drawer title="Las cosas">
              <Navigation>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
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
