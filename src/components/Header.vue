<template>
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/project">Project</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 50px;
   max-width: 1200px;
   margin: 0 auto;
}
header img {
   max-width: 177px;
   max-height: 50px;
}
nav a {
   margin-left: 20px;
   text-decoration: none;
   color: #333;
}
  </style>
  