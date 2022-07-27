<template>
  <div :id="type" class="play-option" @click="select(type)">
    <div class="play-option-container">
      <img :src="require(`../assets/images/icon-${type}.svg`)" :alt="type" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
  },
  methods: {
    select(option) {
      this.$store.state.playOption = option;
      this.$store.state.stage = 1;
    },
  },
};
</script>

<style>
.play-option {
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-option-container {
  background-color: rgba(255, 255, 255, 0.774);
  height: 75%;
  width: 75%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#rock {
  background-image: var(--RockGradient);
}

#scissors {
  background-image: var(--ScissorsGradient);
}
#paper {
  background-image: var(--PaperGradient);
}

#lizard {
  background-image: var(--LizardGradient);
}
#spock {
  background-image: var(--Cyan);
}

.play-option > .play-option-container > img {
  height: 50%;
}
</style>