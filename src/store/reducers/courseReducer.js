const courseReducer = (state = {}, action) => {
  switch(action.type) {
    case 'COURSE_SIGNUP_SUCCESS':
      return {
        ...action.course,
        cancel: false
      }
    case 'COURSE_SIGNUP_ERROR':
      return action.err.message;
    case 'COURSE_CANCEL_SUCCESS':
      return {
        ...action.course,
        cancel: true
      }
    case 'COURSE_CANCEL_ERROR':
      return action.err.message;
    case 'RESET_COURSE':
      return {}
    default:
      return state;
  }
};

export default courseReducer;