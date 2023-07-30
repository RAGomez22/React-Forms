import React, { useState } from "react";
import './App.css'
import Authenticate from "./authenticate";
import SignUpForm from "./signupform";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

function loginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))

async function submitForm(e){
  e.preventDefault();
  if(password.length <8){
    setErrorMessage("password is too short");
  }else{
    setEmail('');
    setPassword('');
  }
  console.log(email);
}

  return (
     //onSubmit replaces eventlistners
     //input generates a box where username info is typed 
     <div>
      <form onSumbit={submitForm}>
        <h1>Sign In </h1>
        <label htmlFor="email"> Email address </label>
        <input
          value={email}
          type="email"
          id="email"
          onChange={ (e) => {
            setErrorMessage('');
            setEmail(e.target.value)
          }}
        />
        

        <label> Password </label> 
          <input
            value={password}
            type="password"
            id="password"
            onChange={ (e) => {
              setErrorMessage('');
              setPassword(e.target.value)
            }} 
          //labels can have nested inputs or be outside of input 
          />
        
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default SignUpForm;
