import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';

const Router = () => {
    console.log(process.env.PUBLIC_URL)
    return (
        <Switch>
            <Route 
                exact path={'/react-portfolio/'}
                component={Landing}
            />
            <Route 
               path='/react-portfolio/projects'
                component={Projects}
            />
            <Route 
              path='/react-portfolio/about-me'
                component={AboutMe}
            />
            <Route 
              path='/react-portfolio/contact'
                component={Contact}
            />
            <Route 
               path={'/react-portfolio/resume'}
                component={Resume}
            />
        </Switch>
        
    );
}

export default Router;