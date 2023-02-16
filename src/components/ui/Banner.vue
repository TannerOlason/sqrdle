<script>
export default {
  props: ["text", "promptText", "unravel"],
};
</script>

<template>
  <div v-show="unravel" class="banner-border-1">
    <div class="banner-border-2">
      <div class="banner-container">
        <div class="text">{{ text }}</div>
        <div class="prompt-text">{{ promptText }}</div>
        <div @click="this.$emit('resetGame')" class="reset-button">
          Play Again
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-border-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 10px);
  height: 200px;
  border: 5px solid black;
  background-color: white;
  z-index: 2;
}
.banner-border-2 {
  border: 5px dotted black;
  width: calc(100% - 10px);
  height: 190px;
}
.banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
}
.text,
.prompt-text {
  font-size: 20px;
  padding-bottom: 15px;
  width: 100%;
  height: 30px;
}
.reset-button {
  width: 140px;
  height: 40px;
  background-color: rgba(127, 255, 212, 1);
  border: 4px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.reset-button:hover {
  background-color: rgba(127, 255, 212, 0.5);
}
</style>
