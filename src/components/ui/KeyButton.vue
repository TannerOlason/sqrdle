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
  background-color: rgb(183, 255, 231);
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
/* eliminate hovers on touch screens */
@media only screen and (pointer: coarse) {
  .keybox:hover {
    background-color: aquamarine;
  }
}
/* media breakpoints */
@media only screen and (max-width: 600px) {
  .keybox {
    min-width: 8%;
    margin: 1px;
  }
}
@media only screen and (min-width: 600px) {
  .keybox {
    min-width: 40px;
    margin: 2px;
  }
}
</style>
