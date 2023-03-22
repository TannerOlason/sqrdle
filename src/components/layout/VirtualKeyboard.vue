<script>
import KeyButton from "../ui/KeyButton.vue";

export default {
  name: "VirtualKeyboard",
  components: { KeyButton },
  data() {
    return {
      alphabet: new Map(),
      alphabetString: "qwertyuiopasdfghjklzxcvbnm"
    };
  },
  created() {
    for (let i = 0; i < this.alphabetString.length; i++) {
      this.alphabet.set(this.alphabetString[i], false);
    }
  }
};
</script>

<template>
  <div class="row-1">
    <KeyButton
      v-for="i in 10"
      :class="'key-' + alphabetString[i - 1]"
      :letter="alphabetString[i - 1]"
      :tried="alphabet.get(alphabetString[i - 1])"
      @click="this.$emit('keyPressed', alphabetString[i - 1])"
    />
    <div
      class="backspace spacer top-backspace"
      @click="this.$emit('keyPressed', 'backspace')"
    >
    <Atlas icon="ArrowLeft" :size="24" />
    </div>
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
    <div class="enter-space spacer" @click="this.$emit('keyPressed', 'enter')">
      <Atlas icon="CurveArrowLeft" :size="24" />
    </div>
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
    <div class="dex spacer" @click="this.$emit('toggleDex')">
      <Atlas icon="Calculator" :size="24" />
    </div>
    <div class="hints spacer">?</div>
    <div
      class="backspace spacer bottom-backspace"
      @click="this.$emit('keyPressed', 'backspace')"
    >
    <Atlas icon="ArrowLeft" :size="24" />
    </div>
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
  margin: 2px;
  border: 2px solid navy;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spacer:hover {
  background-color: rgba(127, 255, 212, 0.5);
}
.tab-space,
.backspace {
  min-width: 65px;
  min-height: 40px;
  display: none;
}
.show-backspace {
  display: flex;
}
.left-shift-space {
  min-width: 40px;
  min-height: 40px;
}
.enter-space {
  min-width: 80px;
  min-height: 40px;
}
.dex {
  min-width: 80px;
  min-height: 40px;
}
.hints {
  min-width: 75px;
  min-height: 40px;
}
.caps-lock-space {
  min-width: 25px;
  min-height: 40px;
}
/* eliminate hovers on touch screens */
@media only screen and (pointer: coarse) {
  .spacer:hover {
    background-color: aquamarine;
  }
}
/* media breakpoints */
@media only screen and (max-width: 600px) {
  .left-shift-space,
  .caps-lock-space,
  .top-backspace {
    display: none;
  }
  .bottom-backspace {
    display: flex;
  }
  .hints,
  .dex,
  .backspace,
  .enter-space {
    min-width: 8%;
  }
  .spacer {
    margin: 1px;
  }
}
@media only screen and (min-width: 600px) {
  .left-shift-space,
  .caps-lock-space,
  .top-backspace {
    display: none;
  }
  .bottom-backspace {
    display: flex;
  }
  .hints,
  .dex,
  .backspace,
  .enter-space {
    min-width: 40px;
  }
}
@media only screen and (min-width: 768px) {
  .left-shift-space,
  .caps-lock-space,
  .top-backspace {
    display: none;
  }
  .bottom-backspace {
    display: flex;
  }
  .hints,
  .dex,
  .backspace,
  .enter-space {
    min-width: 40px;
  }
}
@media only screen and (min-width: 992px) {
  .left-shift-space,
  .caps-lock-space {
    display: unset;
  }
  .bottom-backspace { 
    display: none;
  }
  .top-backspace {
    display: flex;
  }
  .left-shift-space {
    min-width: 40px;
  }
  .enter-space {
    min-width: 80px;
  }
  .dex {
    min-width: 80px;
  }
  .hints {
    min-width: 75px;
  }
  .caps-lock-space {
    min-width: 25px;
  }
  .backspace {
    min-width: 65px;
  }
}
</style>
