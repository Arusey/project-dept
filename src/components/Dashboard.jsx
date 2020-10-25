import React, { Component } from 'react'
import { axiosDefault, axiosWithToken } from './axiosConfig'
import circles from '../assets/circles.svg'
import NavBar from './NavBar'

class Dashboard extends Component {

    constructor(props){
        super(props)
    }


    state = {
        isLoading: false,
        data: []
    }

    handleClick = (e) =>{
        const dept_id = e.target.name;
        window.location.replace(`/department/${dept_id}`)
    }

    handleGet() {
        this.setState({...this, isLoading: true})
        axiosWithToken.get(`api/v1/departments/`)
            .then((res) => {
                this.setState({...this, isLoading: false})
                if (res.data.length > 0) {
                    this.setState({ data: res.data })
                }
            })
            .catch((error) => {
                this.setState({...this, isLoading: false})
                console.log(error)
            })
    }

    componentDidMount() {
        this.handleGet()
    }


    render() {
        const {isLoading} = this.state;
        return (
            <>
                <div>
                    {isLoading && <div className="loader">
                        <div class="lds-circle"><div></div></div>
                    </div>}
                    <section class="main">
                        <NavBar/>
                        <section class="content-section-messages">

                            <div class="section-header">
                                <div class="section-title">
                                    <h1>All Departments</h1>
                                </div>
                                <div class="section-title-button">
                                </div>
                            </div>

                            <div class="section-content">
                                {this.state.data.map((dept) => (
                                     <div class="card-container" key={dept.id}>
                                        <div class="section-content__card">
                                            <div class="flip-card-front">
                                                <p class="on"></p>
                                                <p class="off"></p>
                                                <img src={circles} alt="" />
                                                <br></br><br></br>
                                                <span class="message-name">{dept.name}</span>
                                                <p class="messages-sofar">{dept.service}</p>
                                            </div>
                                            <div class="flip-card-back">
                                                {/* <input type="submit" class="edit" id="edit" value="Edit" />
                                                <input type="submit" class="delete" id="delete" value="Delete" /> */}
                                                <input type="submit" class="start-message" id="start-message" name={dept.id} value="Make Review" onClick={(e)=>this.handleClick(e)} />

                                                <div class="flip-card-back__content">
                                                    <h4>{dept.name}</h4>
                                                    <p>{dept.service}</p>
                                                    <label>{dept.phone_number}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </section>
                    </section>
                </div>
            </>
        )
    }
}

export default Dashboard
