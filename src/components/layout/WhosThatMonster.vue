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
  <img
    :src="revealed ? monster_images[monsterName] : monster_images['whos_that']"
    :alt="
      revealed
        ? 'Squirtle and ' + monsterName + ' fusion'
        : 'silhoutte of Squirtle'
    "
    class="monster"
  />
</template>

<style scoped></style>
