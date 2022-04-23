<template>
  <div class="navber">
    <li><NuxtLink to="/">Home</NuxtLink></li>
    <ul>
      <li><NuxtLink to="/bookpage">Book</NuxtLink></li>
      <li><NuxtLink to="/todo">Todo</NuxtLink></li>
      <li><NuxtLink to="/dogpage">Dog</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navber {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

li {
  margin-right: 10px;
  list-style: none;
}
a {
  text-decoration: none;
  padding: 10px 20px;
  background-color: #41b883;
  border: 1px solid #ccc;
  color: rgb(0, 0, 0);
  font-family: sans-serif;
  font-weight: 100;
}
</style>
