<template>
  <GameBoard />
</template>

<script>
import GameBoard from "./components/layout/GameBoard.vue";

export default {
  name: "Sqrdle",
  components: {
    GameBoard,
  },
};
</script>

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
  background-color: grey;
}
</style>
