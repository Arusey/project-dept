import React, { Component } from 'react';
import tele from '../assets/telegram-logo.svg';
import circles from '../assets/circles.svg';

import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <section class="blue"></section>
                    <img src={circles} class="circles-img" alt="Circles" />
                    <section class="main">
                        <header>
                            <nav class="navbar">
                                <div class="navbar__left">
                                    <a href="/" class="navbar__left-logo">Department <span>Reviewer</span></a>
                                </div>
                                <div class="navbar__right">
                                    <Link to="/login" class="btn navbar__right-login" id="login-desktop">Login</Link>
                                    <Link to="/signup" class="btn navbar__right-signup" id="signup-desktop">Register</Link>
                                </div>
                            </nav>
                        </header>
                        <section class="content-section">
                            <div class="content-section__left">
                                <h1>
                                    Review
              </h1>
                                <p>
                                    All Multimedia University Department have been listed for review.
                                    Review and rate departments based on service delivery.
              </p>
                                <br></br>
                                <a href="/" class="btn navbar__right-signup" id="signup-main">Create Account Now</a>
                            </div>
                            <div class="content-section__right">
                                <img src={tele} alt="logo" id="tele-logo" />
                            </div>
                        </section>
                    </section>
                </div>

            </>
        )
    }
}

export default Home;
