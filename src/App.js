import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/js/all'

import hljs from 'highlight.js';
import "highlight.js/styles/dark.css";

import Icon from './Icon.js'
import Project from './Project.js'
import Principle from './Principle.js'

const meObject = 
`let Jackson = {
  location: Fayetteville,
  occupation: student,
  major: psychology
}`

class App extends Component {
  componentDidMount() {
    this.updateCodeSyntaxHighlighting();
  }

  componentDidUpdate() {
    this.updateCodeSyntaxHighlighting();
  }

  updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("pre").forEach(block => {
      hljs.highlightBlock(block);
    });
  };

  render() {
    return (
      <div className="App is-family-code has-background-dark">
        <section className="hero is-primary is-fullheight is-bold">
          <div className="hero-head">
            <div className="container">
            </div>
            </div>
            <div className="hero-body columns">
              <div className="column is-half is-offset-one-quarter has-text-justified">
                <div className="columns">
                  <div className="column is-half is-offset-one-quarter">
                    <h2 className="subtitle has-text-white">
                       {`// Web Developer`}
                    </h2>
                    <h1 className="title has-text-white">
                      Jackson Ward
                    </h1>
                      <pre className="box splashBox">
                          { meObject }
                      </pre>
                  <div className="columns">
                    <div className="column">
                      <a href="https://github.com/jacksonward" target="_blank" className="button is-medium is-info">
                        <span className="icon">
                          <i className="fab fa-github"></i>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="column">
                      <a href="mailto: jackson.ward21@gmail.com" target="_blank" className="button is-medium is-info">
                        <span className="icon">
                          <i className="fas fa-envelope"></i>
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
            <i className="icon level-item has-text-centered is-large fas fa-angle-down"></i>
          </div>
        </section>
        <section className="section projectsColumns has-background-dark">
          <h1 className="title has-text-centered has-text-white">Dev Principles</h1>
          <div className="columns principlesColumns is-multiline has-text-centered" style={{width: "90%", justifyContent: "center", margin: "auto"}}>
            <Principle
            name="From Scratch"
            description="Projects are made with tender love and care.
            Bloat is minimized for app performance."
            />
            <Principle
            name="Cutting Edge"
            description="I utilize the newest technologies and up-to-date tools and techniques
            to maximize ease of use and achieve a professional appearance."
            />
            <Principle
            name="On Standby"
            description="I make sure my projects keep breathing, at least, haha."
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
              <Icon name="html" Classes={"fab fa-5x fa-html5"}></Icon>
              <Icon name="css" Classes={"fab fa-5x fa-css3-alt"}></Icon>
              <Icon name="JavaScript" Classes={"fab fa-5x fa-js-square"}></Icon>
              <Icon name="nodejs" Classes={"fab fa-5x fa-node-js"}></Icon>
              <Icon name="Digital Ocean" Classes={"fab fa-5x fa-digital-ocean"}></Icon>
              <Icon name="GitHub" Classes={"fab fa-5x fa-github"}></Icon>
              <Icon name="AWS" Classes={"fab fa-5x fa-aws"}></Icon>
              <Icon name="React" Classes={"fab fa-5x fa-react"}></Icon>
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
          <div class="content has-text-centered has-text-info">
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
