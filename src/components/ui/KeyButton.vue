<script>
export default {
  name: "KeyButton",
  props: ["tried", "letter"],
};
</script>

<template>
  <div
    class="keybox"
    :class="this.tried ? 'inactive' : 0"
    @click="this.$emit('')"
  >
    {{ this.letter.toUpperCase() }}
  </div>
</template>

<style scoped>
.keybox {
  min-width: 40px;
  min-height: 40px;
  font-size: 30px;
  background-color: aquamarine;
  color: navy;
  margin: 2px;
  border: 2px solid navy;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.keybox:hover {
  background-color: rgba(127, 255, 212, 0.5);
}

.keybox.inactive {
  color: rgba(0, 0, 128, 0.6);
  border: 2px solid rgba(0, 0, 128, 0.6);
  background-color: rgba(127, 255, 212, 0.3);
  cursor: default;
}

.keybox.inactive:hover {
  background-color: rgba(127, 255, 212, 0.3);
}
</style>
