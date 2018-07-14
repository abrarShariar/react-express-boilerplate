export const setUserDetails = (user) => dispatch => {
  // console.log(user);
  dispatch ({
    type: 'GET_USER_DETAILS',
    payload: user
  })
}
