<template>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/blog">Блог</router-link></li>
        <li><router-link to="/project">Проекты</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header h1 {
  color: #333;
  font-size: 28px;
  font-weight: 700;
}

nav ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-left: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: 500;
}

nav a:hover {
  color: #0069d9;
}
</style>