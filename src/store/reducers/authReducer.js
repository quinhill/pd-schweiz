const authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log(action.err)
      return {
        ...state,
        authError: action.err.message
      }
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state
    default: 
      return state;
  }
}

export default authReducer;