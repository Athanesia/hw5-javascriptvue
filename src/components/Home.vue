<template>
    <div>
      <AppHeader />
      <div class="home">
        <div class="container">
          <section class="hero">
            <img src="img/banner.png" alt="Banner Image" class="banner">
            <div class="hero-content">
              <h1>Пусть ваш дом<br>будет уникальным</h1>
              <p>Существует много вариантов Lorem Ipsum,<br> которые можно использовать</p>
              <button class="header-btn">
                Начать
                <img src="img/arrow.svg" alt="Arrow">
              </button>
            </div>
          </section>
          <section class="projects-content">
            <h2>Следите за нашими проектами</h2>
            <p>Хорошо известно, что читатель будет отвлекаться<br> на читабельный контент страницы</p>
            <div class="project-grid">
              <div class="project">
                <img src="img/project1.png" alt="Современная кухня">
                <div class="project-details">
                  <div class="project-info">
                    <h3>Современная кухня</h3>
                    <p>Декор / Планировка</p>
                  </div>
                  <div class="project-next">
                    <button>
                      <img src="img/left-arrow.svg" alt="Next">
                    </button>
                  </div>
                </div>
              </div>
              <div class="project">
                <img src="img/project4.png" alt="Современная кухня">
                <div class="project-details">
                  <div class="project-info">
                    <h3>Современная кухня</h3>
                    <p>Декор / Планировка</p>
                  </div>
                  <div class="project-next">
                    <button>
                      <img src="img/left-arrow.svg" alt="Next">
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="stats">
            <div class="container">
              <div class="stat">
                <h3>12</h3>
                <p>Лет опыта</p>
              </div>
              <div class="stat">
                <h3>85</h3>
                <p>Успешных проектов</p>
              </div>
              <div class="stat">
                <h3>15</h3>
                <p>Проектов в работе</p>
              </div>
              <div class="stat">
                <h3>95</h3>
                <p>Счастливых клиентов</p>
              </div>
            </div>
          </section>
          <section class="articles">
            <div class="articles-content">
              <h2>Статьи &<br> Новости</h2>
              <p>Хорошо известно, что читатель будет отвлекаться<br> на читабельный контент страницы</p>
            </div>
            <div class="article-grid">
              <div class="article1 article">
                <img src="img/article1.png" alt="Создадим лучший макет перепланировки">
                <div class="tag">Дизайн Кухни</div>
                <h3>Создадим лучший макет перепланировки</h3>
                <p>26 Декабрь 2022</p>
                <button class="arrow-btn">
                  <img src="img/left-arrow.svg" alt="Next">
                </button>
              </div>
              <div class="article2 article">
                <img src="img/article2.png" alt="Лучшие интерьерные идеи по низкой цене">
                <div class="tag">Дизайн Для Жизни</div>
                <h3>Лучшие интерьерные идеи по низкой цене</h3>
                <p>22 Декабрь 2022</p>
                <button class="arrow-btn">
                  <img src="img/left-arrow.svg" alt="Next">
                </button>
              </div>
              <div class="article3 article">
                <img src="img/article3.png" alt="Лучшие интерьерные решения для офисов">
                <div class="tag">Дизайн Интерьера</div>
                <h3>Лучшие интерьерные решения для офисов</h3>
                <p>25 Декабрь 2022</p>
                <button class="arrow-btn">
                  <img src="img/left-arrow.svg" alt="Next">
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from './AppHeader.vue';
  import AppFooter from './AppFooter.vue';
  
  export default {
    name: 'HomePage',
    components: {
      AppHeader,
      AppFooter,
    }
  };
  </script>
  
  <style>
  @import '@/assets/style.css';
  </style>  