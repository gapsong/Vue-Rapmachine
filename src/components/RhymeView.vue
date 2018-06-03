<template>
<div class="container">
  <div class="timer">
    <h1>13</h1>
  </div>
  <article>
    <div v-for="item of rhymes">
      {{item}}
    </div>
    <h1>Rhyme on</h1>
    <div v-for="item of randomWords">
      <button v-on:click='fetchRhymes(item)'> {{item}} </button>
    </div>
  </article>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      randomWords: 'randomWords',
      rhymes: 'rhymes'
    })
  },
  methods: {
    fetchRhymes (word) {
      this.$store.dispatch('FETCH_RHYMES', word)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  width: 100%;
  border: 1px solid gray;
}

.timer {
  float: left;
  max-width: 160px;
  margin: 0;
  padding: 1em;
}

article {
  margin-left: 170px;
  border-left: 1px solid gray;
  padding: 1em;
  overflow: hidden;
}
</style>
