const courseReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_COURSE':
      console.log(action.course);
      return state;
    case 'CREATE_COURSE_ERROR':
      console.log(action.err);
      return state;
    default:
      return state;
  }
}

export default courseReducer;