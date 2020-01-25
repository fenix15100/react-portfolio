import React from 'react';
import './Landing.css'
import {Grid,Cell} from 'react-mdl'


const Landing = () => {
    return (
           
        <div style={{width: '100%',margin: 'auto'}}>
            <Grid className="landing-grid noSpacing" >
                <Cell col={12}>
                    <img 
                        src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png" 
                        alt="avatar"
                        className="avatar-img"
                    />
                </Cell>
                <Cell col={12} tablet={8} phone={4}>
                    <div className="banner-text">
                        <h1>Full Stack Developer</h1>
                        <hr/>
                        <p>[Python,
                            PHP,
                            Powershell,
                            SQL/NO-SQL,
                            Javascript,
                            HTML/CSS,
                            Vmware Developer]</p>

                    </div>
                </Cell>
            </Grid>

        </div>
        
    );
}

export default Landing;