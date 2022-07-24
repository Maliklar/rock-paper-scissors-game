<template>
  <div class="score-box-view">
    <span>SCORE</span>
    <h1>12</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.score-box-view {
  height: 80%;
  width: 148px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

span {
  color: var(--ScoreText);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}
h1 {
  margin: 0px;
  font-size: 4rem;
  font-weight: 700;
  color: var(--DarkText);
  line-height: 4.2rem;
}
</style>