<template>
<div>
  <h1>Wrapmachine</h1>
  <button  v-on:click='fetchRhymes()'> shuffle </button>
  <div class="wrapper">
    <RhymeView class="rhyme-box" :rhymes = "randomRhymes[0]" />
    <RhymeView class="rhyme-box" :rhymes = "randomRhymes[1]" />
    <RhymeView class="rhyme-box" :rhymes = "randomRhymes[2]" />
  </div>
</div>
</template>

<script>
import RhymeView from './RhymeView'
import { mapGetters } from 'vuex'

export default {
  components: {
    RhymeView
  },
  computed: {
    ...mapGetters({
      randomRhymes: 'randomRhymes'
    })
  },
  methods: {
    fetchRhymes () {
      this.$store.dispatch('FETCH_RANDOM_RHYMES')
    }
  },
  created: function () {
    this.$store.dispatch('FETCH_RANDOM_RHYMES')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.wrapper{
    display: flex;
}

.rhyme-box{
  display: inline-block;
}

ul {
  list-style-type: none;
  padding: 0;
}

.background-ocean{
  background-image: url("https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0509/2553/rr12in_Ocean_Blue_SF_shop_preview.png");
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
