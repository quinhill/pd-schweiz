export const createClass = (newClass) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATE_CLASS', newClass });
  }
}