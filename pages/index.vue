<template>
  <div class="container">
    <h1>Hello everyone, Thanks for coming hare..</h1>
    <hr />
    <h3>Click any of this picture and go to this page.</h3>
    <NuxtLink to="/bookpage"><img src="book.JPG" /></NuxtLink>
    <NuxtLink to="/todo"><img src="todo.JPG" /></NuxtLink>
    <NuxtLink to="/dogpage"><img src="dog.JPG" /></NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
}

img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin: 10px;
  padding: 5px;
  border: 2px dotted #ccc;
}
</style>
