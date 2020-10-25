import React, { Component } from 'react'

import person from '../assets/person_outline.svg'

class NavBar extends Component {
    handleLogout (){
        localStorage.removeItem('token')
    }
    render() {
        return (
            <>

                <header>
                    <nav class="navbar">
                        <div class="navbar__left">
                            <a href="/" class="navbar__left-logo">Department <span>Reviewer</span></a>
                        </div>
                        <div class="navbar__right">
                            <a href="/dashboard" class="btn navbar__right-login my-messages-desktop" id="my-messages-desktop">Departments</a>
                            <div class="dropdown">
                                <img src={person} class="logout-icon" alt="" />
                                <div class="dropdown-content">
                                    <a href="/" onClick={() => this.handleLogout()}>Logout</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default NavBar
