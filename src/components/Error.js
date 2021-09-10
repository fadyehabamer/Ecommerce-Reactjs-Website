import React, { Component } from 'react'
import '../landing.css'

export default class Default extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img className="mx-auto d-block banner" alt="404" src="../img/404.svg"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
