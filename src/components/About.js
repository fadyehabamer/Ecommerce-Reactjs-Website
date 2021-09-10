import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../landing.css'

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-sm-6 main-text">
                            <span>This Website is made by.</span>
                            <br /> World's number [0] FrontEnd Developer <br />
                            <span>
                                Fady Ehab Amer
                            </span>

                            <div className="social">

                                <Link to={{ pathname: "https://www.facebook.com/fadyehabamer/" }} target="_blank" >
                                    <i class="fab fa-facebook-square"></i>
                                </Link>

                                <Link to={{ pathname: "https://www.twitter.com/fadyehabamer/" }} target="_blank" >
                                    <i class="fab fa-twitter"></i>
                                </Link>

                                <Link to={{ pathname: "https://www.linkedin.com/in/fadyehabamer/" }} target="_blank" >
                                    <i class="fab fa-linkedin"></i>
                                </Link>

                                <Link to={{ pathname: "https://www.github.com/fadyehabamer/" }} target="_blank" >
                                    <i class="fab fa-github"></i>
                                </Link>

                            </div>
                        </div>
                        <div className="col-sm-6 second-column  ">
                            <img className="banner" src="../img/dev.svg" alt="" />
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
