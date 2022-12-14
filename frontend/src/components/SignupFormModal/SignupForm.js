import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm({setLoginModal, setSignupModal}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleClick =(e)=>{
    e.preventDefault();
    setSignupModal(false);
    setLoginModal(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .then(() => setSignupModal(false))
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
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <div className="signupmo">
        <ul>
          {errors.map((error) => <li key={error} className="error">
             <i class="fa-solid fa-circle-exclamation" id="warning"></i>
            {error}
            </li>)}
        </ul>
      <h1 className="sigmo">Sign Up for Felp</h1>
      <form onSubmit={handleSubmit} className='inputform'>
          {/* Email */}
          <input
            className="inputbox"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          {/* Username */}
          <input
            className="inputbox"
            type="text"
            value={username}
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            required
            />
          {/* Password */}
          <input
            className="inputbox"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          {/* Confirm Password */}
          <input
            className="inputbox"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
        <button type="submit" className="inputbox" id="subbut">Sign Up</button>
      </form>
      <p>Already has an account? <a id='switchlink' onClick={handleClick}>Login to Felp!</a></p>
    <p id="warn">Once your account is registered, you will not be able to modify it</p>
    </div>
    </>
  );
}

export default SignupForm;