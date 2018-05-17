<template>
<div class="wrapper">
  <div class="first">
    <button>Start</button>
    <div>12</div>
  </div>
  <div class="second">
    <!-- <h1>Rhymebox</h1> -->
    <button v-for="item of randomWords" class="word">{{item}}</button>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      randomWords: 'randomWords'
    })
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.word {
    float: top;
}

.panel {
  width: auto;
  height: 200px;
  border: 5px solid grey;
  padding: 25px;
  margin: 25px;
}

.wrapper {
  width: 100%;
  margin: 5px;
  position:relative;
}

.first {
  width: 10%;
  position:absolute;
  top:50%;
  margin-top:-50px;
  height:100px;
}

.second {
  width: 90%;
  height: 300px;
  margin-left: 10%;
  overflow: hidden;
}

.timer {
  text-align: left;
  width: 50px;
  border: 5px solid red;
  padding: 25px;
}

</style>
