import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ShowsListItem from '../components/ShowsListItem'


class ShowsList extends Component {


  renderShows ({ shows }) {
    return shows && shows.length ? (
      shows.map(show => <ShowsListItem show={show} key={show.publicPath} />)
    ) : null


  }

  render () {
    const { shows } = this.props

    return (
      <div className='ShowsList'>
        {this.renderShows({ shows })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

ShowsList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,

}

export default connect(mapStateToProps)(ShowsList)
