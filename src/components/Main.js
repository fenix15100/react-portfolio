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
                exact path={process.env.PUBLIC_URL + "/"}
                component={Landing}
            />
            <Route 
               exact path={process.env.PUBLIC_URL + "/projects"}
                component={Projects}
            />
            <Route 
              exact  path={process.env.PUBLIC_URL + "/about-me"}
                component={AboutMe}
            />
            <Route 
              exact  path={process.env.PUBLIC_URL + "/contact"}
                component={Contact}
            />
            <Route 
               exact path={process.env.PUBLIC_URL + "/resume"}
                component={Resume}
            />
        </Switch>
        
    );
}

export default Main;