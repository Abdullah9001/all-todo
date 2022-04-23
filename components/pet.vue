<template>
  <div class="pet">
    <div class="card-r">
      <div class="card" v-for="(pet, index) in pets" :key="index">
        <img :src="pet.url" />
        <h2>{{ pet.name }}</h2>
        <p>Age: {{ pet.age }}</p>
        <div class="btn">
          <button @click="removePet(pet.id)">
            <svg
              class="dlt"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
              /></svg
            >Remove
          </button>
          <ul>
            <svg
              :class="[pet.isFavorite ? '' : 'love2', 'love1']"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              @click="addFavorite(pet.id)"
            >
              <path
                d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
              />
            </svg>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['addPet', 'removePet', 'addFavorite']),
  },
  computed: {
    ...mapState(['pets']),
    ...mapGetters(['isFavorite']),
  },
}
</script>

<style scoped>
.pet {
  margin-top: 20px;
}

.card {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 20px;
  width: 250px;
}
.card-r {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

img {
  width: 220px;
  height: 170px;
  object-fit: cover;
}
button {
  padding: 9px 12px;
  border-radius: 4px;
  background-color: #e03c3c;
  border: none;
  cursor: pointer;
  align-items: center;
  text-align: center;
  color: #fff;
}

.dlt {
  height: 1rem;
  width: 1rem;
  fill: #111;
  cursor: pointer;
  fill: #fff;
}

.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.love1 {
  height: 1rem;
  width: 1rem;
  fill: #fff;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background-color: #e03c3c;
}
.love2 {
  height: 1rem;
  width: 1rem;
  fill: #e03c3c;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #e03c3c;
}

@media (max-width: 790px) {
  .card-r {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .card-r {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 590px) {
  .card-r {
    grid-template-columns: 1fr;
  }
}
</style>
