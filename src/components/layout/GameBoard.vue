<script>
import VirtualKeyboard from "./VirtualKeyboard.vue";
import WhosThatMonster from "./WhosThatMonster.vue";
import monster_list from "../../assets/data/monsters.js";

export default {
  name: "GameBoard",
  components: { VirtualKeyboard, WhosThatMonster },
  data() {
    return {
      monster: "",
      monster_list,
      currentRow: 0,
      currentBox: 0,
      currentAttempt: "",
      attempts: [[], [], [], [], [], []],
      graded: [false, false, false, false, false, false],
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
      if (answer === "sqrdle") {
        this.alternateEnding();
      } else if (answer === this.monster) {
        this.finishGame(true);
      } else if (this.currentRow === 5) {
        this.finishGame(false);
      }

      this.graded[this.currentRow] = true;
      this.currentRow = this.currentRow + 1;
      this.currentBox = 0;
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
      }
      return "red-square";
    },
    finishGame(win) {
      this.finished = true;
      if (win) {
        // player won
        console.log("winner!");
      } else {
        // player loses
        console.log("better luck next time!");
      }
    },
    alternateEnding() {
      this.finished = true;
      console.log("alternate ending");
    },
  },
  mounted() {
    this.chooseMonster();
  },
};
</script>

<template>
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
      <VirtualKeyboard @keyPressed="handleKeyPress" class="keyboard" />
    </div>
  </div>
</template>

<style scoped>
.keyboard-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.grid-square {
  width: 40px;
  height: 40px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  background-color: white;
  border: 2px solid black;
}
.red-square {
  background-color: red;
  color: white;
}
.orange-square {
  background-color: orange;
  color: black;
}
.green-square {
  background-color: green;
  color: white;
}
.grid-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.game-grid {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
