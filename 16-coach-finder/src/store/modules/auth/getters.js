export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    // 「!!」 this will convert to true boolean
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};
