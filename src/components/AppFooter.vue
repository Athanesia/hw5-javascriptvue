<template>
  <footer>
    <div class="footer-container">
      <div class="footer-col">
        <h3>My Website</h3>
        <p>&copy; 2024 My Website</p>
      </div>
      <div class="footer-col">
        <h3>Контакты</h3>
        <address>
          <p>123 Улица, Город,</p>
          <p>Страна, Почтовый Индекс</p>
        </address>
      </div>
      <div class="footer-col">
        <h3>Подписывайтесь на нас</h3>
        <div class="social-icons">
          <a href="#"><img src="@/assets/img/twitter.svg" alt="Twitter"></a>
          <a href="#"><img src="@/assets/img/linkedin.svg" alt="Linkedin"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  background-color: #333;
  color: white;
  padding: 50px 0;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30%;
}

.footer-col a {
  text-decoration: none;
  color: #4d5053;
}

.footer-col h3 {
  color: #292f36;
  font-family: 'DM Serif Display', serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0%;
  margin-bottom: 20px;
}

.footer-col p {
  color: #4d5053;
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