import React, { Component } from 'react'
import '../landing.css'

export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-sm-6 main-text landing-text">
                            <span>Amazon.</span> <br /> From A to Z <br />
                            The meaning of <span> Inclusion</span>
                        </div>
                        <div className="col-sm-6 second-column  ">
                            <img className="banner" src="../img/landing.svg" alt="" />
                        </div>
                    </div>

                </div>


            </React.Fragment>
        )
    }
}
