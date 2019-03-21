import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {
  faGithub,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faDigitalOcean,
  faAws,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faBreadSlice,
  faCode,
  faClock,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//particlesJS does not work with regular imports well, so just import the file
import particlesJS from 'particles.js'

import Icon from './Icon.js'
import Project from './Project.js'
import Principle from './Principle.js'

class App extends Component {

  componentDidMount = () => {
    window.particlesJS.load('particles-js', './particles.json', null);
  }
  render() {
    return (
      <div className="App is-family-code has-background-dark">
        <div id="particles-js"></div>
        <section className="hero is-primary is-fullheight is-bold">
          <div className="hero-head">
            <div className="container">
            </div>
            </div>
            <div className="hero-body columns">
              <div className="on-top column is-narrow-mobile is-half-tablet is-half-desktop is-offset-one-quarter">
                <div className="columns">
                  <div className="column is-narrow-mobile is-half-tablet is-half-desktop is-offset-one-quarter">
                    <h2 className="subtitle has-text-white">
                       {`// Web Developer`}
                    </h2>
                    <h1 className="title has-text-white">
                      Jackson Ward
                    </h1>
                      <pre className="slide-in on-top box has-background-dark has-text-light splashBox">
                          {
                          <div>
                            <p>let <span className="has-text-success">Jackson</span> = {`{`}</p>
                            <p> location: <span className="has-text-danger">"Fayetteville"</span>,</p>
                            <p> occupation: <span className="has-text-warning">"student"</span>,</p>
                            <p> major: <span className="has-text-primary">"psychology"</span></p>
                            <p>{`}`}</p>
                          </div>
                          }
                      </pre>
                  <div className="columns">
                    <div className="column">
                      <a href="https://github.com/jacksonward" target="_blank" className="button is-medium is-info">
                        <span className="icon">
                          <FontAwesomeIcon icon={faGithub}/>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="column">
                      <a href="mailto: jackson.ward21@gmail.com" target="_blank" className="button is-medium is-info">
                        <span className="icon">
                          <FontAwesomeIcon icon={faEnvelope}/>
                        </span>
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="hero-foot level has-text-centered is-mobile">
          <FontAwesomeIcon icon={faAngleDown} className="level-item has-text-centered" size="2x"/>
          </div>
        </section>
        <section className="section projectsColumns has-background-dark">
          <h1 className="title has-text-centered has-text-white">Dev Principles</h1>
          <div className="columns principlesColumns is-multiline has-text-centered" style={{width: "90%", justifyContent: "center", margin: "auto"}}>
            <Principle
            name="From Scratch"
            icon={faBreadSlice}
            description="Projects are made with tender love and care.
            Bloat is minimized for app performance."
            />
            <Principle
            name="Cutting Edge"
            icon={faCode}
            description="I utilize the newest technologies and up-to-date tools and techniques
            to maximize ease of use and achieve a professional appearance."
            />
            <Principle
            name="On Standby"
            icon={faClock}
            description="Projects receive continued support over their life
            so that they remain clean and functional."
            />
          </div>
        </section>
        <section className="section has-background-dark">
        <div className="container">
        <div className="columns is-centered">
          <div className="column is-full has-background-light is-fullwidth-mobile" style={{
            width: "90%",
            borderRadius: "1em"
          }}>
            <h1 className="title has-text-centered has-text-dark">Kit and Caboodle</h1>
            <div className="columns is-mobile is-multiline has-text-centered has-text-dark" style={{width: "90%", justifyContent: "center", margin: "auto", marginTop: "3em"}}>
              <Icon name="html" icon={faHtml5}></Icon>
              <Icon name="css" icon={faCss3}></Icon>
              <Icon name="JavaScript" icon={faJs}></Icon>
              <Icon name="nodejs" icon={faNodeJs}></Icon>
              <Icon name="Digital Ocean" icon={faDigitalOcean}></Icon>
              <Icon name="GitHub" icon={faGithub}></Icon>
              <Icon name="AWS" icon={faAws}></Icon>
              <Icon name="React" icon={faReact}></Icon>
            </div>
          </div>
        </div>
        </div>
        </section>
        <section className="section projectsColumns has-background-dark">
          <h1 className="title has-text-centered has-text-light">My Projects</h1>
          <div className="columns projectsColumns is-multiline has-text-centered" style={{width: "90%", justifyContent: "center", margin: "auto"}}>
            <Project 
            name="Big-5 Personality Test" 
            description="A 100 Question personality test that uses the big-5 model 
            and shows the user pretty charts that represent their personality."
            link="https://github.com/jacksonward/big-5-server"
            />
            <Project 
            name="Chef Botardee" 
            description="A GroupMe bot that scrapes dineoncampus.com for 
            campus eatery menus, meal trade times, and more!"
            link="https://github.com/jacksonward/hungryBot"
            />
            <Project 
            name="Omoo" 
            description="A site that interprets a user's personality data 
            and prescribes educational resources based on their less-developed facets."
            link="https://github.com/jacksonward/omoo.io"
            />
          </div>
        </section>
        <footer className="footer is-paddingless has-background-dark">
          <div className="content has-text-centered has-text-info">
            <p>
            © Jackson Ward | 2019
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
