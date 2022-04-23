import axios from 'axios'
import { Store } from 'vuex'
const createStore = () => {
  return new Store({
    state: {
      books: [
        'Science and Tecnology',
        'Art and Design',
        'Literature and Culture',
        'History and Geography',
        'Business and Economics',
        'Health and Medicine',
        'Law and Government',
        'Hobbies and Leisure',
        'Religion and Spirituality',
        'Sports and Games',
        'Other',
      ],
      todos: [],
      pets: [],
    },
    mutations: {
      ADD_BOOK(state, book) {
        state.books.unshift(book)
      },
      REMOVE_BOOK(state, book) {
        state.books.splice(book, 1)
      },
      SET_TODOS(state, todos) {
        state.todos = todos
      },
      ADD_TODO(state, todo) {
        state.todos.unshift(todo)
      },
      REMOVE_TODO(state, id) {
        state.todos = state.todos.filter((todo) => todo.id !== id)
      },
      UPDATE_TODO(state, updTodo) {
        const index = state.todos.findIndex((todo) => todo.id === updTodo.id)
        if (index !== -1) {
          state.todos.splice(index, 1, updTodo)
        }
      },
      REMOVE_PET(state, id) {
        if (confirm('Are you sure?')) {
          state.pets = state.pets.filter((pet) => pet.id !== id)
        }
      },
      ADD_FAVORITE(state, id) {
        const index = state.pets.findIndex((pet) => pet.id === id)
        if (index !== -1) {
          state.pets[index].isFavorite = true
        }
      },
      ADD_PET(state, pet) {
        state.pets.push(pet)
      },
      SET_PETS(state, pets) {
        state.pets = pets
      },
    },
    getters: {
      totalBook(state) {
        return state.books.length
      },
    },
    actions: {
      addBook({ commit }, book) {
        commit('ADD_BOOK', book)
      },
      removeBook({ commit }, book) {
        commit('REMOVE_BOOK', book)
      },
      async fetchTodos({ commit }) {
        const todos = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        )
        commit('SET_TODOS', todos.data)
      },
      async addTodo({ commit }, title) {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/todos',
          { title, completed: false }
        )
        commit('ADD_TODO', response.data)
      },
      async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('REMOVE_TODO', id)
      },
      async filterTodo({ commit }, e) {
        const todos = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_limit=${e.target.value}`
        )
        commit('SET_TODOS', todos.data)
      },
      async updateTodo({ commit }, updTodo) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
          updTodo
        )
        commit('UPDATE_TODO', response.data)
      },
      async removePet({ commit }, id) {
        await axios.delete(
          `https://6262f3c2005a66e1e3b03a4e.mockapi.io/pets/${id}`
        )
        commit('REMOVE_PET', id)
      },

      async addFavorite({ commit }, id) {
        const response = await axios.put(
          `https://6262f3c2005a66e1e3b03a4e.mockapi.io/pets/${id}`,
          {
            ...this.state.pets.find((pet) => pet.id === id),
            isFavorite: !this.state.pets.find((pet) => pet.id === id)
              .isFavorite,
          }
        )
        commit('ADD_FAVORITE', response.data)
      },
      async addPet({ commit }, pet) {
        const response = await axios.post(
          'https://6262f3c2005a66e1e3b03a4e.mockapi.io/pets',
          pet
        )
        commit('ADD_PET', response.data)
      },
      async fetchPets({ commit }) {
        const pets = await axios.get(
          'https://6262f3c2005a66e1e3b03a4e.mockapi.io/pets'
        )
        commit('SET_PETS', pets.data)
      },
    },
  })
}
export default createStore
