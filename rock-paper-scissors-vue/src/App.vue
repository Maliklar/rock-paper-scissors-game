<template>
  <main class="main-view">
    <Header />
    <Options />
    <Rules />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Options from "./components/Options.vue";
import Rules from "./components/Rules.vue";
export default {
  name: "App",
  components: { Header, Options, Rules },
};
</script>
<style>
.main-view {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  padding: 52px 0px;
}
</style>
