<template>
  <div class="card" :style="{'top': (-230 * index) + 'px'}">
    <span class="clickable" @click="showDetail = true">
      <img :src="require('@/assets/cards/' + card.id + '.jpg')">
<!--      {{ card.name }} <span v-if="typeof card.costs !== 'undefined'">({{ card.costs}})</span> – type: {{ card.constructor.name }}-->
    </span>
  </div>

  <Teleport to="body" v-if="showDetail">
    <div class="modal-backdrop clickable" @click="showDetail = false"></div>
    <div class="modal card__detail">
      <div class="modal__header">
        <span class="clickable" @click="showDetail = false">X</span>
        <span class="card__title">{{ card.name }}</span>
        <span class="card__costs" v-if="typeof card.costs !== 'undefined'">({{ card.costs}})</span>
      </div>
      <div class="modal__content">

        <img class="" alt="Example Wertungen" :src="require('@/assets/cards/' + card.id + '.jpg')">
      </div>
    </div>
  </Teleport>

</template>

<script>
import { Card } from "@/classes/Card";

export default {
  name: 'CardDisplay',
  props: {
    msg: String,
    index: Number,
    card: {
      type: Card
    }
  },
  data() {
    return {
      showDetail: false
    }
  },
  created() {
    // console.log(this.card.constructor.name);
    // let currentDecree = 'A';
    // console.log(currentDecree);
    // console.log();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clickable:hover {
  cursor: pointer;
}

.modal {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1em;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 75%;
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

.played-cards .card {
  position: relative;
}
.card img {
  width: 300px;
  max-width: 100vw;
  border: 1px solid black;
  border-radius: 5%;
}

.card__detail {
  max-height: 100vh;
  width: 90%;
}

.card__detail img {
  border: 1px solid black;
  border-radius: 5%;
  max-width: 100%;
}

.card__title {
  margin-left: 15px;
}

.card__costs {
  float: right;
}
</style>
