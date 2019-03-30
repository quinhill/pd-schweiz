const responsive = (state = false, action) => {
  switch(action.type) {
    case 'MAKE_RESPONSIVE':
      return action.bool;
    default:
      return state;
  }
}

export default responsive;