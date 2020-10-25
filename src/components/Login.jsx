import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import circle from '../assets/circles.svg'
import {axiosDefault} from './axiosConfig';



class Login extends Component {
    state={
        isLoading: null,
        email:null,
        password:null
    }




    handleSubmit(e){
        e.preventDefault();
        const {email, password, isLoading} = this.state;
        const login_data = {
            email, password
        }
        this.setState({...this, isLoading:true})
        axiosDefault.post(`api/v1/user/login/`, login_data)
        .then((res)=>{
            this.setState({...this, isLoading:false})
            // this.props.history.push('/dashboard')
            if (res.status === 200){
                console.log(res.data.token)
                localStorage.setItem('token',res.data.token)
                window.location.replace(`/dashboard/`)
            }
        })
        .catch((error)=>{
            this.setState({...this, isLoading:false})
            console.log(error)
        })
    }
    render() {

        const {isLoading} = this.state;
        const handleChange = (e) => {
            const {name, value} = e.target;
            this.setState({...this,[name]: value})
            console.log(this.state)
        }
        return (
            <>
                <div>
                    {isLoading && <div className="loader">
                        <div class="lds-circle"><div></div></div>
                    </div>}
                        <header>
                    <section class="main">
                            <nav class="navbar">
                                <div class="navbar__left">
                                    <a href="/" class="navbar__left-logo">Telegram <span>Textbot</span></a>
                                </div>
                                <div class="navbar__right">
                                    <Link to="/login" class="btn navbar__right-login" id="login-desktop">Login</Link>
                                    <Link to="/signup" class="btn navbar__right-signup" id="signup-desktop">Register</Link>
                                </div>
                            </nav>

                        </section>
                        </header>
                        <section class="login-page show" id="login-page">
                            <img src={circle} class="circles-img-modal" alt="Circles" />
                            <div class="x" id="x">
                                <div class="close">
                                    <div class="close-btn"></div>
                                </div>
                            </div>
                            <form class="login-form" method="POST"  onSubmit={(e) => this.handleSubmit(e)}>
                                <h1>Login</h1>
                                <p>Log into your account to start using our <br></br>services.</p>
                                <input required type="email" name="email" id="email" class="input-fields" placeholder="Email" onChange={(e)=>handleChange(e)} /><br></br>
                                <input required type="password" name="password" id="password" class="input-fields" placeholder="Password" onChange={(e)=>handleChange(e)} /><br></br>
                                <input type="submit" name="login-submit" id="login-submit" class="btn submit-btn" value="Login" /><br></br>

                                <p>Do not have an account?
            <Link to="/signup" id="signup-link">Register</Link> here.</p>
                            </form>
                    </section>
                </div>
            </>
        )
    }
}

export default Login
