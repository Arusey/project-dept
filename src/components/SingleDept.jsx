import React, { Component } from 'react'
import { axiosWithToken } from './axiosConfig'
import Disqus from "disqus-react"

import circles from '../assets/circles.svg'
import person from '../assets/person_outline.svg'
import NavBar from './NavBar'


class SingleDept extends Component {

    constructor(props) {
        super(props)
    }
    state = {
        isLoading: false,
        dept: {}
    }

    handleGet(dept_id) {
        this.setState({ ...this, isLoading: true })
        axiosWithToken.get(`api/v1/departments/${dept_id}/`)
            .then((res) => {

                this.setState({ ...this, isLoading: false })
                console.log(res)
                this.setState({ dept: res.data })
            })
            .catch((error) => {
                this.setState({ ...this, isLoading: false })
                console.log(error)
            })
    }

    componentDidMount() {
        const { department } = this.props;
        const dept_id = document.location.pathname.substring(document.location.pathname.lastIndexOf('/.') + 1).split('/').pop();
        this.handleGet(dept_id);
    }

    render() {
        const { dept, isLoading } = this.state;

        const disqusShortname = "huduma-1"
        const disqusConfig = {
            url: "http://localhost:3000",
            identifier: Math.floor(Math.random() * 100),
            title: `Comment on: ${dept.name}`
        }



        return (
            <>
                <div>
                    {isLoading && <div className="loader">
                        <div class="lds-circle"><div></div></div>
                    </div>}

                    <section class="main">
                        <NavBar />
                        <section class="content-section-messages">

                            <div class="section-header">
                                <div class="section-title">
                                    <h1>{dept.name}</h1>
                                    <hr />
                                </div>
                                <div class="section-title-button">
                                </div>
                            </div>

                            <div class="section-content">
                                <div className="single-dept">
                                    <h2>Name</h2>{dept.name}
                                </div>
                                <div className="single-dept">
                                    <h2>Service</h2>{dept.service}
                                </div>
                                <div className="single-dept">
                                    <h2>Email</h2>{dept.email}
                                </div>
                                <div className="single-dept">
                                    <h2>Phone Number</h2>{dept.phone_number}
                                </div>
                            </div>
                            <br></br>
                            <br></br><hr></hr><br></br>
                            <div>
                                <Disqus.DiscussionEmbed
                                    shortname={disqusShortname}
                                    config={disqusConfig}
                                />
                            </div>
                        </section>
                    </section>
                </div>
            </>
        )
    }
}

export default SingleDept
