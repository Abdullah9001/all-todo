<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit="onSubmit">
      <input
        class="input"
        type="text"
        v-model="title"
        placeholder="Add Todo..."
      />
      <button class="button" type="submit">Add Todo</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      title: '',
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault()
      this.addTodo(this.title)
      this.title = ''
    },
  },
  created() {
    this.$store.dispatch('fetchTodos')
  },
}
</script>

<style scoped>
form {
  display: flex;
}

.input {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

.button {
  flex: 2;
  padding: 10px;
  border: 1px solid #41b883;
  background-color: #41b883;
  color: #fff;
  cursor: pointer;
}
</style>
