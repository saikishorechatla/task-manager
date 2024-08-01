import React, { useState } from 'react'
 const Login=()=> {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit =(event)=>{
      event.preventDefault()
      const loginObject  = {
         username : username,
         password :password
      }
    }
  return (
    <div>
      <from >
      <input type="text" placeholder="Enter Username or Email" name="id" onChange={
        (event)=>{setUsername(event.target.value)
        }}/>
      <input type="password" placeholder="Enter password" name="password" onChange={
        (event)=>{setPassword(event.target.value)
        }}/>
      <button onClick={handleSubmit}>Submit</button>
      </from>
    </div>
  )
}

export default Login
