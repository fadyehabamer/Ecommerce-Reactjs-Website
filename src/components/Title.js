import React from 'react'

// * Function Component "Title" takes 2 props name,title
export default function Title({ name, title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto text-center text-title">
                <h1 className="text-capitalize font-weight-bold " >
                    {name} <strong className="text-yellow"> {title}  </strong>
                </h1>
            </div>
        </div>
    )
}
