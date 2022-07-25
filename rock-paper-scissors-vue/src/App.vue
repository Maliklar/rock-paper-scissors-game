<template>
  <main class="main-view">
    <Header />
    <Options />
    <button @click="openRules">RULES</button>
    <Rules ref="rules" />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Options from "./components/Options.vue";
import Rules from "./components/Rules.vue";
export default {
  name: "App",
  components: { Header, Options, Rules },
  methods: {
    openRules() {
      this.$refs.rules.openRules();
      console.log(this.$refs.rules);
    },
  },
};
</script>
<style>
.main-view {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  gap: 48px;
  padding: 52px 0px;
}
button {
  align-self: flex-end;
  border-radius: 8px;
  background-color: transparent;
  border: white 1px solid;
  padding: 10px 30px;
  font-size: 1rem;
  font-weight: 100;
  letter-spacing: 0.2em;
  margin-right: 20px;
  color: white;
}
</style>
