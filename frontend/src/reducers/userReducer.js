const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET_USER_DETAILS':
      return {
        id: action.payload.id,
        name: action.payload.name
      }
    default:
      return state;
  }
}

export default userReducer;
