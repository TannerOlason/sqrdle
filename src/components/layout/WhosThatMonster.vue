<script>
import images from "../../assets/data/images.js";

export default {
  name: "WhosThatMonster",
  props: ["revealed", "monsterName"],
  data() {
    return {
      images,
    };
  },
};
</script>

<template>
  <div class="image-container">
    <img
      :src="images['whos_that']"
      alt="mystery game background"
      class="monster-background"
    />
    <img
      :src="images[monsterName]"
      :alt="
        revealed
          ? 'Squirtle and ' + monsterName + ' fusion'
          : 'silhouette of Squirtle and mystery monster fusion'
      "
      :class="[
        monsterName === 'zapdos' ? 'monster-wide' : 'monster',
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
.monster-wide {
  position: absolute;
  left: calc(50% - 150px);
  top: 60px;
}
.monster-background {
  border-radius: 10px;
}
.silhouette {
  filter: contrast(0%) brightness(50%);
}
.front {
  z-index: 3;
}
</style>
