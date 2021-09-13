import React from 'react'
import '../landing.css'

export default function RedirectSignup() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img className="mx-auto d-block banner" alt="redirect" src="../img/redirect.svg" />
                        <h1 className="mt-4 text-center" >
                            You must <span style={{borderBottom:"2px solid #ff9900"}}>Register</span> first<br/>
                        </h1>

                        <p className="mt-4 text-center">
                            How could you access products without registering , ha?
                        </p>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
