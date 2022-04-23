<template>
  <div class="add-form">
    <div class="form">
      <input type="text" placeholder="Name" id="name" v-model="name" />
      <input type="number" placeholder="Age" id="age" v-model="age" />
      <input type="text" placeholder="Image URL" id="image" v-model="url" />
      <button @click="addPet({ name, age, url, isFavorite })">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      name: '',
      age: '',
      url: '',
      isFavorite: false,
    }
  },
  methods: {
    ...mapActions(['addPet', 'fetchPets']),
  },
  created() {
    this.fetchPets()
  },
}
</script>

<style scoped>
.add-form {
  margin-top: 20px;
}
.form {
  display: flex;
}

input {
  margin-right: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #41b883;
  cursor: pointer;
}
</style>
