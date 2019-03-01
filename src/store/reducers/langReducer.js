const langReducer = (state = 'DE', action) => {
  switch(action.type) {
    case 'CHANGE_LANG':
      return action.lang
    default: 
      return state;
  }
};

export default langReducer;