<template>
  <div class="rules-view" :class="{ active: active }">
    <div class="rules-box">
      <div class="rules-box-header">
        <h1>RULES</h1>
        <img
          src="../assets/images/icon-close.svg"
          @click="close"
          alt="Close Icon"
        />
      </div>
      <img src="../assets/images/image-rules-bonus.svg" alt="Rules SVG" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    close() {
      this.active = false;
    },
    openRules() {
      this.active = true;
      console.log("called");
    },
  },
};
</script>

<style scoped>
.rules-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.521);
  backdrop-filter: blur(10px);
  display: none;
  justify-content: center;
  align-items: center;
}
.rules-view.active {
  display: flex;
}

h1 {
  margin: 0px;
  color: var(--DarkText);
}
.rules-box {
  background-color: white;
  width: 400px;
  height: 460px;
  padding: 30px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.rules-box-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>