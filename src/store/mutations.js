export default {
  REGISTER: function (state, userId) {
    return state.registrations.push(userId)
  },
  FETCH_RHYMES: function (state, rhymes) {
    state.rhymes = rhymes
    return state
  },
  FETCH_WORDS: function (state, words) {
    state.randomWords = words
    return state
  }
}
