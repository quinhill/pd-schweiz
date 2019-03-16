const newUser = (state = false, action) => {
  switch(action.type) {
    case 'NEW_USER_COURSE':
      return true;
    case 'RESET_STATE':
      return false;
    default:
      return state;
  }
}

export default newUser;