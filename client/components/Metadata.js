import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Metadata = ({
  imdbRating,
  imdbUrl,
  id,
  seasons

}) => {
  return (

    <div className='Metadata'>
     <div className='MetadataOverlay'>
     <a className='MetadataImdbRating' href={imdbUrl} target='_blank'>
       <span>IMDb</span>
       &nbsp;
       {imdbRating}
     </a>
     <div className='MetadataSeasons'>
     <span> | </span>
     <span>Seasons:</span>
     &nbsp;
     {seasons}
     </div>
     </div>
    </div>

  )
}

Metadata.propTypes = {
  id: PropTypes.string.isRequired,
  imdbRating: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  seasons: PropTypes.number.isRequired
}

export default Metadata
