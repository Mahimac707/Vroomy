import React, { useState} from 'react'
import Styles from '../pages/styles/Login.module.css'

function PasswordInput({placeholder}) {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={Styles.password}>
        <input type={showPassword? "text" : "password"} placeholder={placeholder} className={Styles.input} style={{paddingRight: "40px"}}/>
        <i className={`fa-solid ${showPassword? "fa-eye-slash" : "fa-eye" } ${Styles.eyeIcon}`} onClick={ () => setShowPassword(!showPassword)} > </i>
    </div>
  )
}

export default PasswordInput
