import 'whatwg-fetch'
export default {
  REGISTER (context, userId) {
    context.commit('REGISTER', userId)
  },
  FETCH_RHYMES (context, word) {
    return fetch('/api/rhymes/' + word).then(function (response) {
      return response.json()
    }).then(function (rhymes) {
      return context.commit('FETCH_RHYMES', rhymes)
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  },
  FETCH_WORDS (context) {
    return fetch('/api')
    .then(function (response) {
      return response.json()
    }).then(function (words) {
      return context.commit('FETCH_WORDS', words)
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }
}
