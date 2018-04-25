import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ViaplayLogo from '../assets/ViaplayLogo'

const Header = ({ children }) => {
  return (
    <header className='Header'>
      <div className='HeaderLinks' role='navigation'>
        <Link to='/'>
          <img
            src={`data:image/png;base64,${ViaplayLogo}`}
            alt='Viaplay logo'
          />
        </Link>
      </div>
      {children}
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.any
}

export default Header
