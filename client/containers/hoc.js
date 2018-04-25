import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import * as Actions from '../utils/actions'

import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import { contentFetch, getFetchError } from '../utils/fetch'

export default function (AugmentedComponent) {
  class hoc extends Component {
    constructor (props) {
      super(props)

      this.state = {
        loaded: false,
        errored: false
      }

      this.setLoaded = this.setLoaded.bind(this)
      this.setErrored = this.setErrored.bind(this)
    }

    componentDidMount () {
      const { shows, actions } = this.props

      if (shows && !shows.length) {
        contentFetch()
          .then(data => {
            actions.updateShows(
              data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
            )
          })
          .then(() => this.setLoaded())
          .catch(e => {
            this.setErrored(getFetchError(e))
          })
      } else {
        this.setLoaded()
      }
    }

    setLoaded () {
      this.setState(state => ({
        ...state,
        loaded: true,
        errored: false
      }))
    }

    setErrored (error) {
      this.setState(state => ({
        ...state,
        errored: error
      }))
    }

    render () {
      const { loaded, errored } = this.state
      const { shows } = this.props

      return errored ? (
        <ErrorMessage message={errored} />
      ) : loaded ? (
        <AugmentedComponent
          {...this.props}
          shows={shows}
          setLoaded={this.setLoaded}
          setErrored={this.setErrored}
        />
      ) : (
        <Loading />
      )
    }
  }

  const mapStateToProps = state => ({
    shows: state.shows
  })

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })

  hoc.propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    shows: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  return connect(mapStateToProps, mapDispatchToProps)(hoc)
}
