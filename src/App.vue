<script>
import GameBoard from "./components/layout/GameBoard.vue";
import images from "./assets/data/monster_images.js"

export default {
  name: "Sqrdle",
  components: {
    GameBoard,
  },
  computed: {
    voltorb() {
      if (window.innerWidth > 600) {
        return {
          backgroundImage: 'url('+ images["voltorb"] +'), url('+ images["electrode"] +')'
        }
      } else {
        return {}
      }
    }
  }
};
</script>

<template>
  <GameBoard />
  <div class="background" :style="voltorb"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  overflow: hidden;
}
.background {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
  background-repeat: repeat, repeat;
  background-position: max(25%, 50px) max(75%, 150px), max(75%, 150px) max(25%, 50px);
  background-color:  	#f3c877;
  background-size: max(5%, 50px), max(5%, 50px);
  z-index: -1;
}
</style>
