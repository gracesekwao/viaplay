import axios from 'axios'

export const getFetchError = e => {

  if (e.response) {
    console.log(e.response.status)
    if (e.response.status === 400) {
      return `Your browser sent a request that this server could not understand`
    }
  } else if (e.request) {
    return `Couldn't connect with the server`
  } else {
    console.log('Error', e.message)
    return `There was an internal error`
  }
}

export const contentFetch = () => {
  return axios('https://content.viaplay.se/pc-se/serier/samtliga').then(
    response => response.data
  )
}
