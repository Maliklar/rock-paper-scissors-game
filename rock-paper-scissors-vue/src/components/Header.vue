<template>
  <header>
    <img src="../assets/images/logo-bonus.svg" alt="Logo" />
    <Score-box />
  </header>
</template>

<script>
import ScoreBox from "./ScoreBox.vue";
export default {
  components: { ScoreBox },
};
</script>

<style>
header {
  height: 146px;
  margin: 0 336px;
  padding: 0 24px;
  outline: var(--HeaderOutline) solid 3px;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
img {
  margin-left: 4px;
}
</style>