<template>
  <div class="hello">
    <h2>Decrees</h2>
    <div>
      <template v-for="(card, key) in decrees" :key="key">
        <p :class="{'decree--active': currentSeason.decrees.includes(key)}">
          {{ key }}: <card-display :card="card"></card-display>
        </p>
      </template>
    </div>

    <h2>Season</h2>
    <h3>Current season: {{ currentSeason.name }}</h3>
    <p>Remaining Energy: {{ Math.max(remainingEnergy, 0) }}</p>
    <p>Current decrees: <span class="decree" v-for="(decree, index) in currentSeason.decrees" :key="index">{{decree}}</span></p>

    <h2>Played Cards</h2>

    <p>
      <button @click="drawCard()" :disabled="remainingEnergy < 1">Draw Card</button>
      <button @click="nextSeason()" :disabled="remainingEnergy > 0 || seasons.length === 0">Next Season</button>
      <button @click="newGame()">New Game</button>
    </p>
    
    <div class="played-cards">
      <card-display
          v-for="(card, index) in playedCards" :key="index" :card="card"
          :index="index"
      ></card-display>
    </div>

  </div>
</template>

<script>
import { Deck } from '@/classes/Deck';
import CardDisplay from "@/components/CardDisplay.vue";

export default {
  components: {CardDisplay},
  data() {
    return {
      currentSeason: {name: ''},
      seasons: [],

      decrees: {},

      cardDeck: {},

      playedCards: [],

      remainingEnergy: 0,
      currentIndex: 0
    }
  },
  created() {
    this.newGame();
  },
  methods: {
    newGame() {
      this.cardDeck = new Deck();
      this.decrees = this.cardDeck.getRandomDecrees();
      this.seasons = this.cardDeck.getSeasons();

      this.nextSeason();
    },
    drawCard() {
      const drawnCard = this.cardDeck.draw();
      this.remainingEnergy -= drawnCard.costs ?? 0;
      this.playedCards.push(drawnCard);
    },
    nextSeason() {
      this.cardDeck.nextSeason();
      this.currentSeason = this.seasons.shift();
      this.remainingEnergy = this.currentSeason.units;
      this.playedCards = [];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.decree--active {
  background-color: red;
}

.decree:last-of-type::before {
  content: ', '
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.played-cards {
  text-align: center;
}

</style>
