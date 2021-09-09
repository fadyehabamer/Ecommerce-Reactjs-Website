import React, { Component } from 'react'
import '../landing.css'

export default class Landing extends Component {
    render() {
        return (
            <React.Fragment>

                {/* <section id="main">
                    <div className="main-text">
                        <span>Amazon.</span> <br /> From A to Z <br />
                        The meaning of Inclusion
                    </div>


                </section> */}

                {/* <div class="container">
                    <div class="row">
                        <div class="col-4 main-text">
                            <span>Amazon.</span> <br /> From A to Z <br />
                            The meaning of Inclusion
                        </div>
                        <div class="col">
                            <img src="../img/landing.svg" alt="" />
                        </div>
                    </div>
                </div> */}


                <div className="container my-5">
                    <div className="row">
                        <div className="col-sm-6 main-text">
                            <span>Amazon.</span> <br /> From A to Z <br />
                            The meaning of Inclusion
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
