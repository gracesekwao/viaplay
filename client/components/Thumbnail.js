import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Image from './Image'

const Thumbnail = ({ image, title, to, className }) => {
  return (
    <Link to={to} className={className}>
      <Image className='Thumbnail' src={image} alt={`${title} thumbnail`} />
    </Link>
  )
}

Thumbnail.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Thumbnail
