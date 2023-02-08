<script>
import KeyButton from "../ui/KeyButton.vue";
export default {
  name: "VirtualKeyboard",
  components: { KeyButton },
  data() {
    return {
      alphabet: new Map(),
      alphabetString: "qwertyuiopasdfghjklzxcvbnm",
    };
  },
  created() {
    for (let i = 0; i < this.alphabetString.length; i++) {
      this.alphabet.set(this.alphabetString[i], false);
    }
  },
};
</script>

<template>
  <div class="row-1">
    <div class="tab-space spacer"></div>
    <KeyButton
      v-for="i in 10"
      :class="'key-' + alphabetString[i - 1]"
      :letter="alphabetString[i - 1]"
      :tried="alphabet.get(alphabetString[i - 1])"
      @click="this.$emit('keyPressed', alphabetString[i - 1])"
    />
    <div
      class="backslash-space spacer"
      @click="this.$emit('keyPressed', 'backspace')"
    ></div>
  </div>
  <div class="row-2">
    <div class="caps-lock-space spacer"></div>
    <KeyButton
      v-for="i in 9"
      :class="'key-' + alphabetString[i + 9]"
      :letter="alphabetString[i + 9]"
      :tried="alphabet.get(alphabetString[i + 9])"
      @click="this.$emit('keyPressed', alphabetString[i + 9])"
    />
    <div
      class="enter-space spacer"
      @click="this.$emit('keyPressed', 'enter')"
    ></div>
  </div>
  <div class="row-3">
    <div class="left-shift-space spacer"></div>
    <KeyButton
      v-for="i in 7"
      :class="'key-' + alphabetString[i + 18]"
      :letter="alphabetString[i + 18]"
      :tried="alphabet.get(alphabetString[i + 18])"
      @click="this.$emit('keyPressed', alphabetString[i + 18])"
    />
    <div class="right-shift-space spacer"></div>
  </div>
</template>

<style scoped>
.row-1,
.row-2,
.row-3 {
  width: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
}
.spacer {
  font-size: 30px;
  background-color: aquamarine;
  color: navy;
  margin: 5px;
  border: 2px solid navy;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab-space,
.backslash-space {
  min-width: 55px;
  min-height: 40px;
}
.left-shift-space,
.enter-space {
  min-width: 90px;
  min-height: 40px;
}
.right-shift-space {
  min-width: 185px;
  min-height: 40px;
}
.caps-lock-space {
  min-width: 75px;
  min-height: 40px;
}
</style>
