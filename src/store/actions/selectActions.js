export const selectPage = (page) => {
  return (dispatch) => {
    dispatch({ type: 'SELECT_PAGE', page })
  }
};