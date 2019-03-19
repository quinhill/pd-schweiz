// Auth actions

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
});

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
});

export const loginSuccess = () => ({
  type: 'LOGIN_SUCCESS'
});

export const signoutSuccess = () => ({
  type: 'SIGNOUT_SUCCESS'
});

export const signupSuccess = () => ({
  type: 'SIGNUP_SUCCESS'
});

export const signupError = (message) => ({
  type: 'SIGNUP_ERROR',
  message
})

export const newUserCourse = () => ({
  type: 'NEW_USER_COURSE'
});

// Course actions

export const courseSignupSuccess = (course) => ({
  type: 'COURSE_SIGNUP_SUCCESS',
  course
});

export const courseSignupError = (message) => ({
  type: 'COURSE_SIGNUP_ERROR',
  message
});

export const courseCancelSuccess = (course) => ({
  type: 'COURSE_CANCEL_SUCCESS',
  course
});

export const courseCancelError = (message) => ({
  type: 'COURSE_CANCEL_ERROR',
  message
});

export const resetState = () => ({
  type: 'RESET_STATE'
});

export const addCurrentCourse = (course) => ({
  type:'ADD_CURRENT_COURSE',
  course
});

export const storeAnonData = (user) => ({ 
  type: 'STORE_ANON_DATA',
  user
});

export const changeLang = (lang) => ({
  type: 'CHANGE_LANG',
  lang
})