import React,{useEffect} from 'react'
import {useDispatch } from 'react-redux'
import {useHistory } from 'react-router-dom'
import {logout} from "../redux/actions/regActions"
const Logout = () => {
    const history=useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logout())
        localStorage.removeItem("token");
        history.push("/")
    }, [dispatch,history])

    return (
        <div>
            <center>
            </center>
        </div>
    )
}

export default Logout
