import React,{useState} from 'react'
import {Link ,useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {requestLogin} from "../Thunk" 
const Login = () => {
     const history=useHistory()
     const [loginForm,setLoginForm]=useState({username: '', password: ''})
     const dispatch = useDispatch()

     const handleInputData=(e)=>
    {
      let {name,value}=e.target;
      setLoginForm({...loginForm,[name]:value})

    }
    
    const handleSubmit=(e)=>
    {   e.preventDefault()
        dispatch(requestLogin(loginForm));
        history.push("/checkout")
       
    } 
      
    
    
  
  return (
    <div>
      <center>
        <h1>Login</h1>
            <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="html">Username: </label> &nbsp;&nbsp;
            <input type="text" name="username" onChange={handleInputData}/><br/><br/>
            <label htmlFor="html">Password: </label> &nbsp;&nbsp;
            <input type="password" name="password" onChange={handleInputData}/><br/><br/>
            <input type="submit" value="Login"/>
            <p>Don't have an account? <span> <Link to="/signup">Sign Up</Link></span></p>
          </form>
      </center>
    </div>
  );
};
export default Login
