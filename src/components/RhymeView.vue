<template>
<div class="container">
  <h1>Rhyme on</h1>
  <hr/>
  <div v-for="item of rhymes">
    {{item}}
  </div>
  <!-- <h1>Random words</h1>
  <div v-for="item of randomWords">
    <button v-on:click='fetchRhymes(item)'> {{item}} </button>
  </div> -->
</div>
</template>

<script>
export default {
  props: ['rhymes']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  width: 100%;
  margin: 0px 80px;
  border: 1px solid gray;
  padding: 0px 20px 30px 20px;
  border-radius: 5px;
}

</style>
