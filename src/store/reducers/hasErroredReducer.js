const hasErrored = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      console.log(action.message)
      return action.message
    default:
      return state;
  }
}

export default hasErrored;