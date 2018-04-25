const reducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SHOWS':
      return {
        ...state,
        shows: action.payload.shows
      }
  
    default:
      return state
  }
}

export default reducer
