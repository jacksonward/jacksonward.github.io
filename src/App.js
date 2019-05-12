import React, { Component } from 'react';
import './index.css'
import './App.css';
import 'bulma/css/bulma.css'
import {
  faGithub,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faAws,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faBreadSlice,
  faCode,
  faClock,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import firebaseIcon from './firebase.svg'
import netlifyIcon from './netlify.svg'
//particlesJS does not work with regular imports well, so just import the file
import particlesJS from 'particles.js'

import Icon from './Icon.js'
import SVG from './SVG.js'
import Project from './Project.js'
import Principle from './Principle.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      arrowOpacity: 1
    }
  }

  componentDidMount = () => {
    window.particlesJS.load('particles-js', './particles.json', null);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.scrollIcon !== null) {
      if (window.pageYOffset > 200) {
        this.setState({
          arrowOpacity: 0
        })
      } else {
        this.setState({
          arrowOpacity: 1 / (.05 * window.pageYOffset)
        })
      }
    }
  }

  render() {
    return (
      <div 
      style={{
      }}
      className="App has-background-primary is-family-code">
        <div 
        style={{
          position: "fixed"
        }}
        id="particles-js"></div>
        <section className="on-top hero is-fullheight is-bold">
          <div className="hero-head">
            <div className="container">
            </div>
            </div>
            <div className="hero-body columns">
              <div style={{pointerEvents: 'none'}} className="on-top column is-narrow-mobile is-half-tablet is-half-desktop is-offset-one-quarter">
                <div className="columns">
                <div style={{ pointerEvents: 'none' }} className="column is-narrow-mobile is-half-tablet is-half-desktop is-offset-one-quarter">
                  <h2 className="subtitle has-text-white">
                       {`// Web Developer`}
                    </h2>
                  <h1 className="title has-text-white">
                      Jackson Ward
                    </h1>
                  <pre style={{ pointerEvents: 'auto' }} className="slide-in on-top box has-background-dark has-text-light splashBox">
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
                    <div style={{ pointerEvents: 'auto' }} className="column">
                      <a href="https://github.com/jacksonward" target="_blank" rel="noopener noreferrer" className="button is-medium is-info">
                        <span className="icon">
                          <FontAwesomeIcon icon={faGithub}/>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="column">
                      <a style={{ pointerEvents: 'auto' }} href="mailto: jackson.ward21@gmail.com" target="_blank" rel="noopener noreferrer" className="button is-medium is-info">
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
          <FontAwesomeIcon
          style={{
            opacity: this.state.arrowOpacity
          }}
          icon={faAngleDown} className="level-item has-text-centered" size="2x"/>
          </div>
        </section>
        <section className="on-top section projectsColumns">
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
        <section className="on-top section">
        <div className="container">
        <div className="columns is-centered">
          <div className="column box is-full has-background-dark is-fullwidth-mobile" style={{
            width: "90%",
            borderRadius: "1em"
          }}>
            <h1 className="title has-text-centered has-text-light">Kit and Caboodle</h1>
            <div className="columns is-mobile is-multiline has-text-centered has-text-dark" 
            style={{
              width: "90%", 
              justifyContent: "center", 
              margin: "auto", 
              marginTop: "3em",
              }}>
              <Icon name="HTML" icon={faHtml5}></Icon>
              <Icon name="CSS" icon={faCss3}></Icon>
              <Icon name="JavaScript" icon={faJs}></Icon>
              <Icon name="Nodejs" icon={faNodeJs}></Icon>
              <SVG name="Firebase" svg={firebaseIcon}></SVG>
              <SVG name="Netlify" svg={netlifyIcon}></SVG>
              <Icon name="GitHub" icon={faGithub}></Icon>
              <Icon name="AWS" icon={faAws}></Icon>
              <Icon name="React" icon={faReact}></Icon>
            </div>
          </div>
        </div>
        </div>
        </section>
        <section className="on-top section projectsColumns">
          <h1 className="title has-text-centered has-text-light">My Projects</h1>
          <div className="columns projectsColumns is-multiline has-text-centered" style={{width: "100%", justifyContent: "center", margin: "auto"}}>
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
            name="Chef++"
            description="An upgraded version of Chef Botardee that is much faster and allows for more functionality by interacting directly with the api."
            link="https://github.com/jacksonward/chefBot"
            />
            <Project
            name="Chord Scraper"
            description="An Ultimate-Guitar Scraper that fetches and stores chord info for requested songs."
            link="https://github.com/jacksonward/chord-scraper"
            />
            <Project
            name="Open Chords"
            description="A cross-platform open-source app that displays chord data retrieved from my Chord Scraper on mobile."
            link="https://github.com/jacksonward/open-chords"
            />
          </div>
        </section>
        <footer className="footer has-background-primary is-paddingless">
          <div className="content has-text-centered has-text-light">
            <p
            style={{
              fontWeight: '700'
            }}
            >{`Made with <3 by Jackson Ward | 2019`}</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
