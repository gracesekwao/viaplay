import React from 'react'
import PropTypes from 'prop-types'

import Thumbnail from './Thumbnail'
import Metadata from './Metadata'

const ShowsListItem = ({ show }) => {
  return (
    <div className='ShowsListItem'>
      <Thumbnail
        to={`/${show.publicPath}`}
        className='Thumbnail'
        image={show.content.images.landscape.url}
        title={show.content.series.title}
      />
      {
        show && show.content && show.content.imdb &&
        <Metadata
          id={show.publicPath}
          seasons={show.content.series.seasons}
          imdbRating={show.content.imdb.rating}
          imdbUrl={show.content.imdb.url}
        />
      }
    </div>
  )
}

ShowsListItem.propTypes = {
  show: PropTypes.object.isRequired
}

export default ShowsListItem
