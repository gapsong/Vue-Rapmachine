<template>
<div class="panel">
  <h1>Wrapmachine</h1>
  <!-- <button  v-on:click='fetchRhymes("hallo")'> hello </button> -->
  <RhymeView class="rhyme-box"/>
</div>
</template>

<script>
import RhymeView from './RhymeView'

export default {
  components: {
    RhymeView
  },
  methods: {
    fetchRhymes (word) {
      this.$store.dispatch('FETCH_RHYMES', word)
    }
  },
  created: function () {
    this.$store.dispatch('FETCH_WORDS')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
