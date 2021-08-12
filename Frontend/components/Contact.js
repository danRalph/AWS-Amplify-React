import React from "react";
import "../App.css";
import { TimelineMax, Power1 } from "gsap/all";
import Svg from './svg/Svg';
import Svg3 from './svg/Svg3';
import Cursor from './Cursor';

import {Container, Button, Form} from 'react-bootstrap';


import Amplify from "aws-amplify";
import { API } from 'aws-amplify';

import awsExports from "../aws-exports";
Amplify.configure(awsExports);


async function addContact() {
    const data = {
      body: {
        name: formState.name,
        email: formState.email,
        message: formState.message
      }
    };
  
    console.log(data);
    const apiData = await API.post('formAPI', '/contact', data);
    console.log({ apiData });
    alert('Mail sent');
  }
  
  const formState = { name: '', email: '', message: '' };
  
  function updateFormState(key, value) {
    formState[key] = value;
  }

  


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.timeline = new TimelineMax({ paused: true });

    }

    componentDidMount() {

        this.timeline
            .from(this.header, 1, {
                display: "none",
                autoAlpha: 0,
                delay: 0.45,
                ease: Power1.easeIn
            })
            .from(this.content, 0.4, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            })
            .from(this.form, 2, {
                autoAlpha: 0,
                y: 25,
                ease: Power1.easeInOut
            });

        this.timeline.play();
    }

    changePage = (e, destination) => {
        e.preventDefault();
        this.timeline.reverse();
        const timelineDuration = this.timeline.duration() * 1000;
        setTimeout(() => {
            this.props.history.push(destination);
        }, timelineDuration);
    };


    render() {
        return (
            <div className="Contact">
                <Cursor />
                <Svg />
                <Svg3 />
                <header className="navigation">
                    <div className="navLeft">
                        <div className="magnet">
                            <a href="https://www.instagram.com/danralphh/" target="_blank" class="fa fa-instagram"></a>
                        </div>
                        <div className="magnet">
                            <a href="https://www.github.com/danRalph/" target="_blank" class="fa fa-github"></a>
                        </div>
                    </div>
                    <button className="nav-item"
                        onClick={e => this.changePage(e, "/")}>
                        <a>HOME</a>
                    </button>
                    <button
                        className="nav-item"
                        onClick={e => this.changePage(e, "/about")}>
                        <a>ABOUT</a>
                    </button>
                    <button class-name="nav-item"
                        onClick={e => this.changePage(e, "/projects")}>
                        <a>PROJECTS</a>
                    </button>
                    <button class-name="nav-item">
                        <a>CONTACT</a>
                    </button>
                </header>


                <div ref={div => (this.header = div)} className="contact-header">
                    <p><a>CONTACT</a></p>
                </div>

                <div ref={div => (this.content = div)} className="contact-content">
                    <p>
                        Any questions? Want to work together? Get in touch
                    </p>

                </div>

                <div ref={div => (this.form = div)} className="container">
               
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={e => updateFormState('name', e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={e => updateFormState('email', e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} onChange={e => updateFormState('message', e.target.value)} />
                </Form.Group>
                <Button onClick={addContact}>Send a message</Button>
      
                </div>

            </div>
        );
    }
}


    export default Contact;