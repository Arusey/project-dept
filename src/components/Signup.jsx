import React, { Component } from 'react';
import circles from '../assets/circles.svg';
import { Link } from 'react-router-dom';
import { axiosDefault } from './axiosConfig';
// import { toast } from "react-toastify";

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        isLoading: false,
        first_name: null,
        last_name: null,
        email: null,
        password: null
    }



    handleSubmit(e) {
        e.preventDefault();
        const { first_name, last_name, email, password } = this.state;
        const signup_data = {
            first_name, last_name, email, password
        }
        this.setState({ ...this, isLoading: true })
        axiosDefault.post(`api/v1/user/register/`, signup_data)
            .then((res) => {
                this.setState({ ...this, isLoading: false })
                console.log(res)
                window.location.replace(`/login/`)
            })
            .catch((error) => {
                this.setState({ ...this, isLoading: false })
                console.log(error)
            }
            )
    }



    render() {
        const {isLoading} = this.state;
        const handleChange = (e) => {
            const { name, value } = e.target;
            this.setState({ ...this, [name]: value })
            console.log(this.state)
        }
        return (

            <>
                <div>

                    {isLoading && <div className="loader">
                        <div class="lds-circle"><div></div></div>
                    </div>}
                    <section class="signup-page show" id="signup-page">
                        <img src={circles} class="circles-img-modal" alt="Circles" />
                        <div class="x-signup" id="x-signup">
                            <div class="close">
                                <div class="close-btn"></div>
                            </div>
                        </div>
                        <form class="signup-form" method="POST" onSubmit={(e) => this.handleSubmit(e)}>
                            <h1>Register</h1>
                            <p>Create an account to start enjoying our <br></br>services.</p><br></br>
                            <input required type="text" name="first_name" id="firstname-signup" class="input-fields" placeholder="First Name" onChange={(e) => handleChange(e)} /><br></br>
                            <input required type="text" name="last_name" id="lastname-signup" class="input-fields" placeholder="Last Name" onChange={(e) => handleChange(e)} /><br></br>
                            <input required type="email" name="email" id="email-signup" class="input-fields" placeholder="Email" onChange={(e) => handleChange(e)} /><br></br>
                            <input required type="password" name="password" id="password-signup" class="input-fields" placeholder="Password" onChange={(e) => handleChange(e)} /><br></br>
                            <input type="submit" name="signup-submit" id="signup-submit" class="btn submit-btn" value="Signup" /><br></br>

                            <p>Already have an account?<br></br>
                                <Link to="/login" id="login-link">Login</Link> here.</p><br></br>
                        </form>
                    </section>
                </div>
            </>
        )
    }
}

export default Signup
