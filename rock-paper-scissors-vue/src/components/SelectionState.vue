<template>
  <div class="selection-state-view">
    <div class="choice-box">
      <h1>YOU PICKED</h1>
      <PlayOption class="play-option" :type="$store.state.playOption" />
    </div>
    <div v-if="winner" class="result">
      <h1 v-if="winner == false">YOU LOSE</h1>
      <h1 v-if="winner == true">YOU WIN</h1>
      <button>PLAY AGAIN</button>
    </div>
    <div class="choice-box">
      <h1>THE HOUSE PICKED</h1>
      <PlayOption
        v-if="$store.state.houseOption"
        :type="$store.state.houseOption"
      />
      <div v-else class="placehoder"></div>
    </div>
  </div>
</template>

<script>
import PlayOption from "./PlayOption.vue";

export default {
  components: { PlayOption },
  data() {
    return {
      winner: null,
    };
  },

  mounted() {
    setTimeout(() => {
      this.$store.state.houseOption =
        this.$store.state.optionsList[
          Math.floor(Math.random() * this.$store.state.optionsList.length)
        ];

      setTimeout(() => {
        this.updateWinner(
          this.$store.state.playOption,
          this.$store.state.houseOption
        );
      }, 1000);
    }, 1500);
  },

  methods: {
    updateWinner(player, pc) {
      console.log(player, pc);
      if (player == "rock") {
        if (pc == "lizard" || pc == "scissors") {
          this.winner = true;
        } else {
          this.winner = false;
        }
      } else if (player == "lizard") {
        if (pc == "spock" || pc == "paper") {
          this.winner = true;
        } else {
          this.winner = false;
        }
      } else if (player == "spock") {
        if (pc == "sicssors" || pc == "rock") {
          this.winner = true;
        } else {
          this.winner = false;
        }
      } else if (player == "scissors") {
        if (pc == "paper" || pc == "lizard") {
          this.winner = true;
        } else {
          this.winner = false;
        }
      } else if (player == "paper") {
        if (pc == "spock" || pc == "rock") {
          this.winner = true;
        } else {
          this.winner = false;
        }
      }
    },
  },
};
</script>

<style>
.selection-state-view {
  display: flex;
  justify-content: space-between;
  margin: 0 25%;
  flex: 100%;

  /* align-self: center; */
}
.choice-box {
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: space-evenly;

  font-size: 0.8rem;
  letter-spacing: 0.3rem;
}
.play-option {
  height: 290px;
  width: 290px;
}

.placehoder {
  background-color: rgba(0, 0, 0, 0.267);
  border-radius: 100%;
  height: 190px;
  width: 190px;
}

.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.result > button {
  margin: 0px 40px;
  padding: 0px 40px;
  background-color: white;
  color: black;
}
</style>