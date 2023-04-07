<script>
import axios from "axios";
export default {
  data() {
    return {
      monsterData: [],
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
<template>
  <div class="credits-card">
    <div class="credits-top-bar">
      <div class="credits-title">Credits</div>
      <button class="x-button" @click="this.$emit('closeCredits')">X</button>
    </div>
    <div class="credits-body">
        <div class="credits-body-title">sqrdle</div>
        <div class="credits-text">
            <div class="game-instructions">Games Instructions & Rules:</div> <br>
            - Guess a six-letter monster name.<br>
            - Six attempts are allowed.<br>
            - Attempts will reveal a silhouette of the monster.<br>
            - Attempts will color boxes based on their correctness.<br>
            - Incorrect letters will show grey.<br>
            - Correct letters in the correct position will show green.<br>
            - Correct letters in the incorrect position will show orange.<br>
            - The Dex, represented by the calculator icon, will show possible monster names and details.
        </div>
        <div class="credits-name">Written by Tanner Olason</div>
        <a class="credits-github-link" href="https://github.com/TannerOlason/sqrdle">GitHub</a>
    </div>
    <div class="credits-bottom-bar"></div>
  </div>
</template>
<style scoped>
.credits-body-title {
    font-size: 1.4em;
    font-weight: bold;
}
.credits-name,
.credits-github-link,
.credits-body-title,
.credits-text {
    padding: 1em;
    margin-bottom: 0.4em;
    border-radius: 5px;
}
.credits-text {
    text-align: left;
    margin-left: 2em;
}
.game-instructions {
    font-size: 1.2em;
}
.credits-github-link:hover {
    background-color: lightgrey;
}
.credits-body {
    height: calc(100% - 60px);
    border-left: 2px solid black;
    border-right: 2px solid black;
}
.monster-grid-space {
  width: 16%;
  height: 16%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.monster-grid-space:hover {
  background-color: grey;
}
.fill-credits {
  width: 100%;
  height: 100%;
  z-index: 101;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
}
.mon-name, 
.mon-description {
  padding: 1em;
}
.mon-name {
  font-size: 30px;
}
.monster-grid-space:hover {
  background-color: lightgray;
}
.monster-grid-space img {
  max-width: 100%;
  max-height: 100%;
}
.fill-credits img {
  width: 200px;
  height: 200px;
}
.credits-card {
  max-width: 800px;
  max-height: 1200px;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 101;
  border-radius: 5px;
}
.credits-title {
  margin-left: 10px;
}
.x-button {
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  background-color: #ffa87f;
  border: unset;
  border-left: 2px solid black;
  cursor: pointer;
  color: black;
  border-radius: 0 3px 0 0;
}
.x-button:hover {
  background-color: #b37659;
  border: unset;
  border-left: 2px solid black;
}
.icon-grid {
  height: calc(100% - 60px);
  border-left: 2px solid black;
  border-right: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}
.credits-top-bar,
.credits-bottom-bar {
  background-color: aquamarine;
  color: black;
  border-radius: 5px 5px 0 0;
  border: 2px solid black;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.credits-top-bar {
  border-radius: 5px 5px 0 0;
}
.credits-bottom-bar {
  border-radius: 0 0 5px 5px;
}
/* media breakpoints */
@media only screen and (max-width: 600px) {
  .credits-top-bar,
  .credits-bottom-bar {
    min-height: 50px;
  }
  .x-button {
    height: 50px;
    width: 50px;
  }
}
@media only screen and (min-width: 600px) {
  .credits-top-bar,
  .credits-bottom-bar {
    min-height: 40px;
  }
  .x-button {
    height: 40px;
    width: 40px;
  }
}
@media only screen and (min-width: 992px) {
  .credits-top-bar,
  .credits-bottom-bar {
    min-height: 30px;
  }
  .x-button {
    height: 30px;
    width: 30px;
  }
}
</style>
