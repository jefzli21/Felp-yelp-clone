import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm({setSignupModal, setLoginModal}) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleClick = (e) =>{
    e.preventDefault();
    setSignupModal(true);
    setLoginModal(false);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => { 
        console.log("hello")
        setLoginModal(false)})
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });

  };

  return (
    <>
    <div className="loginmo">

      <h1 id="logmo">Log In to Felp</h1>
      <form onSubmit={handleSubmit} className='inputform'>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
          <input
            className="inputbox"
            type="text"
            placeholder="Username or Email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            />

          <input
            className="inputbox"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        <button className="inputbox" type="submit" id="subbut">Log In</button>
      </form>
      <button className="inputbox" id="subbut" onClick={()=>{
        dispatch(sessionActions.login({credential:"foodhelper", password:"password"}))
        setLoginModal(false)
        }}>Demo Login</button>
      <p>New to Felp? <a id="switchlink" onClick={handleClick}>Create an Account!</a></p>
    </div>
    </>
  );
}

export default LoginForm;