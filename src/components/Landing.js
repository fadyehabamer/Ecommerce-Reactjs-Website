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

                <div className="container stats my-5">
                    <div className="col-md-12">
                    <h2 className="main-text">
                       <span> Our Statistics </span>
                    </h2>
                        <div className="row ">
                            <div className="col-xl-3 col-lg-6">
                                <div className="card l-bg-white">
                                    <div className="card-statistic-3 p-4">
                                        <div className="card-icon card-icon-large"><i className="fas fa-shopping-cart"></i></div>
                                        <div className="mb-4">
                                            <h5 className="card-title mb-0">New Orders</h5>
                                        </div>
                                        <div className="row align-items-center mb-2 d-flex">
                                            <div className="col-8">
                                                <h2 className="d-flex align-items-center mb-0">
                                                    3,243
                                                </h2>
                                            </div>
                                            <div className="col-4 text-right">
                                                <span  className="stat-percent">1% <i className="fa fa-arrow-up"></i></span>
                                            </div>
                                        </div>
                                        <div className="progress mt-1 " data-height="8">
                                            <div className="progress-bar l-bg-white" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="card l-bg-orange-dark">
                                    <div className="card-statistic-3 p-4">
                                        <div className="card-icon card-icon-large"><i className="fas fa-users"></i></div>
                                        <div className="mb-4">
                                            <h5 className="card-title mb-0">Customers</h5>
                                        </div>
                                        <div className="row align-items-center mb-2 d-flex">
                                            <div className="col-8">
                                                <h2 className="d-flex align-items-center mb-0">
                                                    15.07k
                                                </h2>
                                            </div>
                                            <div className="col-4 text-right">
                                                <span  className="stat-percent">9% <i className="fa fa-arrow-up"></i></span>
                                            </div>
                                        </div>
                                        <div className="progress mt-1 " data-height="8">
                                            <div className="progress-bar l-bg-orange-dark" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="card l-bg-white">
                                    <div className="card-statistic-3 p-4">
                                        <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                                        <div className="mb-4">
                                            <h5 className="card-title mb-0">Items Buyed</h5>
                                        </div>
                                        <div className="row align-items-center mb-2 d-flex">
                                            <div className="col-8">
                                                <h2 className="d-flex align-items-center mb-0">
                                                    578
                                                </h2>
                                            </div>
                                            <div className="col-4 text-right">
                                                <span className="stat-percent">5% <i className="fa fa-arrow-up"></i></span>
                                            </div>
                                        </div>
                                        <div className="progress mt-1 " data-height="8">
                                            <div className="progress-bar l-bg-white" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6">
                                <div className="card l-bg-orange-dark">
                                    <div className="card-statistic-3 p-4">
                                        <div className="card-icon card-icon-large"><i className="fas fa-dollar-sign"></i></div>
                                        <div className="mb-4">
                                            <h5 className="card-title mb-0">Revenue Today</h5>
                                        </div>
                                        <div className="row align-items-center mb-2 d-flex">
                                            <div className="col-8">
                                                <h2 className="d-flex align-items-center mb-0">
                                                    $11.61k
                                                </h2>
                                            </div>
                                            <div className="col-4 text-right">
                                                <span className="stat-percent">2.5% <i className="fa fa-arrow-up"></i></span>
                                            </div>
                                        </div>
                                        <div className="progress mt-1 " data-height="8" >
                                            <div className="progress-bar l-bg-orange-dark" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  
 


            </React.Fragment>
        )
    }
}
