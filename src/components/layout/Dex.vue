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
            show: false
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    toggleInfo(monName) {
      let i = this.monsterData.findIndex(el => el.name === monName)
      this.monsterData[i].show = !this.monsterData[i].show;
      this.$refs[monName+'-grid-space'][0].classList.toggle('fill-dex')
    },
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
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
        @click="toggleInfo(monster.name)"
        :ref="monster.name+'-grid-space'"
      >
        <div v-show="monster.show" class="mon-name">{{ capitalize(monster.name) }}</div>
        <img :src="monster.sprite" :alt="monster.name + ' image'" />
        <div v-show="monster.show" class="mon-description">{{ monster.description }}</div>
      </div>
    </div>
    <div class="dex-bottom-bar"></div>
  </div>
</template>
<style scoped>
.monster-grid-space {
  width: 16%;
  height: 16%;
  cursor: pointer;
}
.monster-grid-space:hover {
  background-color: grey;
}
.fill-dex {
  width: 100%;
  height: 100%;
  z-index: 101;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
}
.mon-name, 
.mon-description {
  padding: 1em;
}
.monster-grid-space:hover {
  background-color: lightgray;
}
.monster-grid-space img {
  max-width: 100%;
  max-height: 100%;
}
.dex-card {
  max-width: 800px;
  max-height: 1200px;
  width: 100%;
  height: 100%;
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
  position: relative;
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
