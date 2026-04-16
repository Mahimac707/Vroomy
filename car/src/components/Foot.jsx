import { Link } from 'react-router-dom'
import React from 'react'

function Foot() {
  return (
    <>
    <footer>
         <a> &copy; {new Date().getFullYear()} all Right Reserved <strong>Vroomy</strong></a>
      </footer>
    </>
  )
}

export default Foot