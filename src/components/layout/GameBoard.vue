<script>
import Dex from "./Dex.vue";
import VirtualKeyboard from "./VirtualKeyboard.vue";
import WhosThatMonster from "./WhosThatMonster.vue";
import Banner from "../ui/Banner.vue";
import monster_list from "../../assets/data/monsters.js";

export default {
  name: "GameBoard",
  components: { VirtualKeyboard, WhosThatMonster, Banner, Dex },
  data() {
    return {
      monster: "",
      monster_list,
      currentRow: 0,
      currentBox: 0,
      currentAttempt: "",
      attempts: [[], [], [], [], [], []],
      graded: [false, false, false, false, false, false],
      finished: false,
      endPhrase: "",
      dexShow: false,
    };
  },
  methods: {
    chooseMonster() {
      let i = Number(Math.floor(Math.random() * monster_list.list.length));
      this.monster = monster_list.list[i];
    },
    handleKeyPress(key) {
      // check if function instead of letter
      if (key === "backspace") {
        if (this.currentBox > 0) {
          this.attempts[this.currentRow].pop();

          this.currentBox = this.currentBox - 1;
        }
      } else if (key === "enter") {
        if (
          this.attempts[this.currentRow].length === 6 &&
          (monster_list.list.includes(
            this.attempts[this.currentRow].join("")
          ) ||
            this.attempts[this.currentRow].join("") === "sqrdle")
        ) {
          this.gradeAttempt();
        }
      } else {
        // show letter in grid row
        if (this.currentBox < 6) {
          this.attempts[this.currentRow].push(key);
          this.currentBox = this.currentBox + 1;
        }
      }
    },
    gradeAttempt() {
      let answer = this.attempts[this.currentRow].join("");
      this.graded[this.currentRow] = true;
      this.currentRow = this.currentRow + 1;
      this.currentBox = 0;

      if (answer === "sqrdle") {
        this.alternateEnding();
      } else if (answer === this.monster) {
        this.finishGame(true);
      } else if (this.currentRow === 6) {
        this.finishGame(false);
      }
    },
    checkGraded(i, j) {
      if (this.graded[i]) {
        if (this.attempts[i][j] === this.monster[j]) {
          return "green-square";
        } else if (
          this.monster.includes(this.attempts[i][j]) &&
          this.attempts[i][j] !== ""
        ) {
          return "orange-square";
        }
        return "darkgrey-square";
      }
      return "grey-square";
    },
    finishGame(win) {
      this.finished = true;
      if (win) {
        // player won
        // console.log("winner!");
        this.endPhrase = "That's right. It's Squirtle!";
        // this.reset();
      } else {
        // player loses
        this.endPhrase = "No. I'm sorry, it was Squirtle.";
        // console.log("better luck next time!");
        // this.reset();
      }
    },
    alternateEnding() {
      this.finished = true;
      // console.log("alternate ending");
      this.endPhrase = "Correct! It's Squirtle! You're good at this!";
      // this.reset();
    },
    reset() {
      this.attempts = [[], [], [], [], [], []];
      this.currentRow = 0;
      this.currentBox = 0;
      this.graded = [false, false, false, false, false, false];
      this.finished = false;
      this.chooseMonster();
    },
    toggleDex(show) {
      this.dexShow = show || !this.dexShow;
    },
  },
  mounted() {
    this.chooseMonster();
  },
};
</script>

<template>
  <div v-show="dexShow" class="dex-container">
    <Dex :monster_list="monster_list" @closeDex="toggleDex(false)" />
  </div>
  <div class="monster-container">
    <WhosThatMonster :revealed="finished" :monsterName="monster" />
  </div>
  <div class="gameboard-container">
    <div class="game-grid">
      <div v-for="x in 6" class="grid-row">
        <div
          v-for="y in 6"
          class="grid-square"
          :class="checkGraded(x - 1, y - 1)"
        >
          {{
            attempts[x - 1][y - 1] ? attempts[x - 1][y - 1].toUpperCase() : ""
          }}
        </div>
      </div>
    </div>
    <div class="keyboard-container">
      <Banner
        :text="endPhrase"
        :promptText="'Would you like to play again?'"
        :unravel="finished"
        @resetGame="reset"
      />
      <div class="keyboard">
        <VirtualKeyboard
          @keyPressed="handleKeyPress"
          @toggleDex="toggleDex"
          class="keyboard"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.keyboard-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
}
.keyboard {
  position: absolute;
  top: 1em;
  left: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.grid-square {
  width: 16%;
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
}
.darkgrey-square {
  background-color: rgba(169, 169, 169, 0.5);
  color: black;
}
.grey-square {
  background-color: lightgrey;
  color: black;
}
.orange-square {
  background-color: rgba(255, 165, 0, 0.5);
  color: white;
}
.green-square {
  background-color: rgba(0, 128, 0, 0.5);
  color: white;
}
.grid-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 16%;
}
.game-grid {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  height: 60%;
  position: absolute;
  top: 60px;
  margin: auto;
}
.gameboard-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* media breakpoints */
@media only screen and (max-width: 600px) {
  .dex-container {
    width: 100%;
    height: calc(100% - 50px);
    /* left: calc(50% - 250px); */
  }
}
@media only screen and (min-width: 600px) {
  .dex-container {
    max-width: 600px;
    max-height: 600px;
    left: calc(50% - 300px);
    top: 55px;
  }
}
</style>
