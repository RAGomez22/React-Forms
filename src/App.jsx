import { useState } from 'react'
import './App.css'

function loginForm() {
  const [username, setUsername] = useState('')
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
  console.log(username);
}

  return (
     //onSubmit replaces eventlistners
     //input generates a box where username info is typed 
     <div>
      <form onSumbit={submitForm}>
        <label>
          Username: 
          <input
          value={username}
          onChange={ (e) => {setUsername(e.target.value)}

          }
          />
          </label>
          <button type="submit">Submit</button>
          </form>
          </div>
  
  )
}

export default loginForm
