<template>
  <div>
    <h1>Book List</h1>
    <h2>Total Book: {{ totalBook }}</h2>
    <input v-model="bookName" type="text" />
    <button class="addButton" @click="addBook(bookName)">Add Book</button>
    <div class="book">
      <ul v-for="(book, index) in books" :key="index">
        <li>
          {{ book }}
          <button class="dltButton" @click="removeBook(index)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      bookName: '',
    }
  },
  methods: {
    ...mapActions(['removeBook', 'addBook']),
  },
  computed: {
    ...mapState(['books']),
    ...mapGetters(['totalBook']),
  },
}
</script>

<style scoped>
input {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
.addButton {
  flex: 2;
  padding: 10px;
  border: 1px solid #41b883;
  background-color: #41b883;
  color: #fff;
  cursor: pointer;
}
.dltButton {
  padding: 7px;
  border: 1px solid #ccc;
  background-color: #e03c3c;
  color: #fff;
  cursor: pointer;
  margin-left: 2px;
}
.book {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
ul {
  display: flex;
  list-style: none;
  display: grid;
}

li {
  background-color: #41b883;
  padding: 8px;
  display: flex;
  justify-content: space-between;
}
</style>
