const selectReducer = (state = null, action) => {
  switch(action.type) {
    case 'SELECT_PAGE':
      return action.page;
    default:
      return state;
  }
}

export default selectReducer;