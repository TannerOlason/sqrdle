<script>
export default {};
</script>
<template>
  <div class="dex-card">
    <div class="dex-top-bar">
      The Dex!
      <button @click="this.$emit('closeDex')">X</button>
    </div>
    <div class="icon-grid"></div>
  </div>
</template>
<style scoped>
.dex-card {
  width: 300px;
  height: 500px;
  background-color: black;
  z-index: 101;
}
</style>
