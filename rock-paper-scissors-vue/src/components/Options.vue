<template>
  <div class="options-view">
    <div id="rock" class="choice-border">
      <div class="choice-container">
        <img src="../assets/images/icon-rock.svg" alt="" />
      </div>
    </div>
    <div id="paper" class="choice-border">
      <div class="choice-container">
        <img src="../assets/images/icon-paper.svg" alt="" />
      </div>
    </div>
    <div id="scissor" class="choice-border">
      <div class="choice-container">
        <img src="../assets/images/icon-scissors.svg" alt="" />
      </div>
    </div>
    <div id="lizard" class="choice-border">
      <div class="choice-container">
        <img src="../assets/images/icon-lizard.svg" alt="" />
      </div>
    </div>
    <div id="spock" class="choice-border">
      <div class="choice-container">
        <img src="../assets/images/icon-spock.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.options-view {
  background: url("../assets/images/bg-pentagon.svg");
  background-repeat: no-repeat;
  background-position: center;
  height: 464px;
  width: 470px;
  align-self: center;
  position: relative;
}

.choice-border {
  width: var(--choiceSize);
  height: var(--choiceSize);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.choice-container {
  background-color: rgba(255, 255, 255, 0.774);
  height: 75%;
  width: 75%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#scissor {
  background-image: var(--ScissorsGradient);
  left: 50%;
  margin-left: calc(-1 * var(--choiceSize) / 2);
}
#paper {
  background-image: var(--PaperGradient);
  right: 0%;
  top: 45%;
  margin-top: calc(-1 * var(--choiceSize) / 2);
}

#rock {
  background-image: var(--RockGradient);
  right: 14%;
  bottom: 0%;
  margin-top: calc(-1 * var(--choiceSize) / 2);
}

#lizard {
  background-image: var(--LizardGradient);
  left: 14%;
  bottom: 0%;
  margin-top: calc(-1 * var(--choiceSize) / 2);
}
#spock {
  background-image: var(--Cyan);
  left: 0%;
  top: 45%;
  margin-top: calc(-1 * var(--choiceSize) / 2);
}
</style>