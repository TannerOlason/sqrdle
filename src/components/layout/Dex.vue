<script>
import axios from "axios";
export default {
  data() {
    return {
      monsterData: [],
    };
  },
  props: ["monster_list"],
  methods: {
    async getMonsterData() {
      const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
      try {
        for (let i = 0; i < this.monster_list.list.length; i++) {
          let monster =
            this.monster_list.list[i] === "mrmime"
              ? "mr-mime"
              : this.monster_list.list[i];
          const response = await axios.get(baseUrl + monster);
          const descriptionURL = response.data.species.url;
          const descriptionResponse = await axios.get(descriptionURL);
          const description = descriptionResponse.data.flavor_text_entries
            .find((entry) => entry.language.name === "en")
            .flavor_text.replace(/[\n\f]/g, " ");
          const sprite = response.data.sprites.front_default;
          this.monsterData.push({
            name: monster,
            description,
            sprite,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getMonsterData();
  },
};
</script>
<template>
  <div class="dex-card">
    <div class="dex-top-bar">
      <div class="dex-title">The Dex!</div>
      <button class="x-button" @click="this.$emit('closeDex')">X</button>
    </div>
    <div class="icon-grid">
      <div
        class="monster-grid-space"
        v-for="monster in monsterData"
        :key="monster.name"
      >
        <img :src="monster.sprite" :alt="monster.name" />
      </div>
    </div>
    <div class="dex-bottom-bar"></div>
  </div>
</template>
<style scoped>
.monster-grid-space {
  width: 55px;
  height: 55px;
  border: 1px solid red;
  cursor: pointer;
}
.monster-grid-space:hover {
  background-color: lightgray;
}
.monster-grid-space img {
  max-width: 100%;
  max-height: 100%;
}
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
