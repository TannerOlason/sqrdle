<script>
import monster_images from "../../assets/data/monster_images.js";

export default {
  name: "WhosThatMonster",
  props: ["revealed", "monsterName"],
  data() {
    return {
      monster_images,
    };
  },
};
</script>

<template>
  <div class="image-container">
    <img
      :src="monster_images['whos_that']"
      alt="mystery game background"
      class="background"
    />
    <img
      :src="monster_images[monsterName]"
      :alt="
        revealed
          ? 'Squirtle and ' + monsterName + ' fusion'
          : 'silhouette of Squirtle and mystery monster fusion'
      "
      :class="[
        monsterName === 'zapdos' ? 'monster-tall' : 'monster',
        revealed ? 'front' : 'silhouette',
      ]"
    />
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  height: 400px;
}
.background {
  position: absolute;
  left: calc(50% - 200px);
  top: 0;
}
.monster {
  position: absolute;
  left: calc(50% - 120px);
  top: 60px;
}
.monster-tall {
  position: absolute;
  left: calc(50% - 120px);
  top: 40px;
}
.silhouette {
  filter: contrast(0%) brightness(50%);
}
.front {
  z-index: 3;
}
</style>
