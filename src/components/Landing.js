import React from 'react';
import './Landing.css'
import {Grid,Cell} from 'react-mdl'
import avatar from './assets/avatar.png'


const Landing = () => {
    return (
           
        <div style={{width: '100%',margin: 'auto'}}>
            <Grid className="landing-grid noSpacing" >
                <Cell col={12}>
                    <img 
                        src={avatar} 
                        alt="avatar"
                        className="avatar-img"
                    />
                    <br/>
                    <br/>
                    
                
                    <div className="banner-text">
                        <h1>Francisco José Camacho Maya</h1>    
                        <h1>Full Stack Developer</h1>
                        <h1>reCoding minds</h1>
                        
                        <hr/>
                        <div className="skills">
                            
                        </div>
                        
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/franciscojosecamacho/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://github.com/fenix15100" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://twitter.com/fenix15100" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                            </a>
                        </div>

                    </div>

                    
                </Cell>
            </Grid>

        </div>
        
    );
}

export default Landing;