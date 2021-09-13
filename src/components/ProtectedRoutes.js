import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// * vars == isAuth for Authentication ,
// * component for components will be rendered ,
// *  rest for other props
export default function ProtectedRoutes({ isAuth: isAuth, component: Component, ...rest }) {
    return (
        <div>

            <Route {...rest} render={(props) => {
                if (isAuth){
                    return <Component/>
                }else{
                    // * get props from where you called this route
                 return  <Redirect to={{pathname:"/signup" , state:{from : props.location} }}/>
                }
            }} />


        </div>
    )
}
