import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowsList from '../containers/ShowsList'
import hoc from '../containers/hoc'

@hoc
class ListView extends Component {
  render() {
    const { shows } = this.props

    return (
      <div className='ListView'>
        <Header/>
        <ShowsList shows={shows} />
        <Footer />
      </div>
    )
  }
}

ListView.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object)
}

export default ListView
