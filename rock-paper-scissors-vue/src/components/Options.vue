<template>
  <div class="options-view">
    <PlayOption id="rock" :type="'rock'" />
    <PlayOption id="paper" :type="'paper'" />
    <PlayOption id="scissors" :type="'scissors'" />
    <PlayOption id="lizard" :type="'lizard'" />
    <PlayOption id="spock" :type="'spock'" />
  </div>
</template>

<script scoped>
import PlayOption from "./PlayOption.vue";

export default {
  components: { PlayOption },
};
</script>

<style>
.options-view {
  background: url("../assets/images/bg-pentagon.svg");
  background-repeat: no-repeat;
  background-position: center;
  min-height: 464px;
  min-width: 470px;
  flex: 100%;
  align-self: center;
  position: relative;
}

.options-view > .play-option {
  position: absolute;
  height: 144px;
  width: 144px;
}

.options-view > #rock {
  right: 14%;
  bottom: 0%;
  margin-top: calc(-1 * 144px / 2);
}

.options-view > #scissors {
  left: 50%;
  margin-left: calc(-1 * 144px / 2);
}
.options-view > #paper {
  right: 0%;
  top: 45%;
  margin-top: calc(-1 * 144px / 2);
}

.options-view > #lizard {
  left: 14%;
  bottom: 0%;
  margin-top: calc(-1 * 144px / 2);
}
.options-view > #spock {
  left: 0%;
  top: 45%;
  margin-top: calc(-1 * 144px / 2);
}
</style>