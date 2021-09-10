import React, { Component } from 'react'
import '../landing.css'

export default class Default extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img className="mx-auto d-block banner" alt="404" src="../img/404.svg" />
                            <h3 className="text-center" >
                                The requested URL{"  "}
                                <span className="text-danger
                                ">"{this.props.location.pathname}"</span> was
                                not found
                            </h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
