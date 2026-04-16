import React from 'react'
import { Link } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'
import Styles from './styles/Login.module.css'

function Login() {
  return (
    <div className={Styles.box}>
        <h1>Login page</h1>
        <form className={Styles.form}>
          <label>Email:</label><br/>
          <input type="email" placeholder='email' className={Styles.input}></input><br/>

          <label>Password:</label><br/> 
          <PasswordInput placeholder="password" /><br />

          <input type="submit" value='Login' className={Styles.button}></input>
        </form>
        <p>Don't have an account?<Link to='/sign' className={Styles.link}>Register here</Link></p>
    </div>
  )
}

export default Login