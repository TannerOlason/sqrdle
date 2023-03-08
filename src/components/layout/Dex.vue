<script>
export default {};
</script>
<template>
  <div class="dex-card">
    <div class="dex-top-bar">
      <div class="dex-title">The Dex!</div>
      <button class="x-button" @click="this.$emit('closeDex')">X</button>
    </div>
    <div class="icon-grid"></div>
    <div class="dex-bottom-bar"></div>
  </div>
</template>
<style scoped>
.dex-card {
  width: 300px;
  height: 500px;
  background-color: white;
  z-index: 101;
  border-radius: 5px;
}
.dex-title {
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
  color: aquamarine;
  border-radius: 0 3px 0 0;
}
.x-button:hover {
  background-color: #b37659;
  border: unset;
  border-left: 2px solid black;
  color: #59b2a2;
}
.icon-grid {
  height: calc(100% - 60px);
  border-left: 2px solid black;
  border-right: 2px solid black;
}
.dex-top-bar,
.dex-bottom-bar {
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
.dex-top-bar {
  border-radius: 5px 5px 0 0;
}
.dex-bottom-bar {
  border-radius: 0 0 5px 5px;
}
</style>
