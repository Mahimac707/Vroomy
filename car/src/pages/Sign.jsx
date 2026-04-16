import { Link } from 'react-router-dom'
import Styles from './styles/Login.module.css'
import React from 'react'
import PasswordInput from '../components/PasswordInput'

function Sign() {
  return (
    <div className={Styles.box}>
      <h1>Sign in</h1>
      <form className={Styles.form}>
        <label>Username:</label><br/>
        <input type="text" placeholder='your name' className={Styles.input}></input><br/>

        <label>Email:</label><br/>
        <input type="email" placeholder='correct email' className={Styles.input}></input><br/>

        <label>Password:</label><br />
        <PasswordInput placeholder="Apple@123" /><br />

        <label>Confirm password:</label><br/>
        <PasswordInput placeholder="rewrite password"/><br/>

        <input type="submit" value="Sign in" className={Styles.button}></input>
      </form>
      <p>Already have an account?<Link to='/login' className={Styles.link}>Login here</Link></p>
    </div>
  )
}

export default Sign
