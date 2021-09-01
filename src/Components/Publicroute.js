import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect,Route } from 'react-router'
const Publicroute = ({component:Component,...res})=> {
    const token = useSelector(state =>state.register.token)
    return (
        <Route {...res}
        render={(props)=>
        token?<Redirect to="/"/>
        :
        <Component {...res} {...props} />
        }
        />
    )
}

export default Publicroute
