<template>
  <main class="main-view">
    <Header />
    <Options v-if="$store.state.stage == 0" />
    <SelectionState v-else-if="$store.state.stage == 1" />
    <button @click="openRules">RULES</button>
    <Rules ref="rules" />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Options from "./components/Options.vue";
import Rules from "./components/Rules.vue";
import SelectionState from "./components/SelectionState.vue";
export default {
  name: "App",
  components: { Header, Options, Rules, SelectionState },
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
  height: 100vh;
  justify-content: space-around;
  gap: 48px;
  padding-top: 52px;
  padding-bottom: 20px;
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
