import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';

const Main = () => {
    return (
        <Switch>
            <Route 
                exact path="/"
                component={Landing}
            />
            <Route 
                path="/projects"
                component={Projects}
            />
            <Route 
                path="/about-me"
                component={AboutMe}
            />
            <Route 
                path="/contact"
                component={Contact}
            />
            <Route 
                path="/resume"
                component={Resume}
            />

           

        </Switch>
        
    );
}

export default Main;