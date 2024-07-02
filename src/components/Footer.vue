<template>
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  footer {
   color: white;
   padding: 50px 0;
}

.footer-container {
   display: flex;
   justify-content: space-between;
   max-width: 1200px;
   margin: 0 auto;
}

.footer-col img {
   max-width: 177px;
   max-height: 50px;
}

.footer-col {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   width: 30%;
}

.footer-col a {
   text-decoration: none;
   color: rgb(77, 80, 83);
}

.footer-col h3 {
   color: rgb(41, 47, 54);
   font-family: 'DM Serif Display', serif;
   font-size: 25px;
   font-weight: 400;
   line-height: 125%;
   letter-spacing: 0%;
   margin-bottom: 20px;
}

.footer-col p {
   color: rgb(77, 80, 83);
   font-family: 'Jost', sans-serif;
   font-size: 22px;
   font-weight: 400;
   line-height: 300%;
   letter-spacing: 1%;
   text-align: left;
   margin: 0 0 10px;
}

.footer-col address p {
   margin: 26px 0;
   font-size: 18px;
   line-height: 150%;
   text-align: left;
}

.social-icons {
   display: flex;
   gap: 54px;
   margin-top: 20px;
}

.social-icons img {
   width: 32px;
   height: 32px;
}
  </style>
  