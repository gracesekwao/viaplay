import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Footer = ({ children }) => {
  return (
    <footer className='Footer'>
      {children}
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.any
}

export default Footer
