<template>
  <div>
    <AppHeader />
    <div id="app" class="container">
      <main>
        <section class="hero">
          <img src="@/assets/img/Photo_banner.jpg" alt="Hero Image" />
          <div class="hero-overlay">
            <div class="hero-content">
              <h1>Статьи &<br /> Новости</h1>
              <p>Домой/<br /> Блог</p>
            </div>
          </div>
        </section>
        <section class="latest-post">
          <h2>Последний пост</h2>
          <div class="post-content">
            <img src="@/assets/img/Image_post.png" alt="Latest Post Image" />
            <div class="post-text">
              <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
              <p>
                С того времени этот, похожий на латинский, текст стал стандартом
                в печатной промышленности для примеров шрифтов и текстов. Перед
                появлением электронных издательств дизайнеры импровизировали в
                работе над макетами, изображая текст при помощи волнистых линий.
                С появлением самоклеющихся наклеек с напечатанным текстом «Lorem
                ipsum» появился более реалистичный способ обозначения
                расположения текста на странице.
              </p>
              <div class="post-details">
                <div class="post-date">
                  <p class="date">26 December, 2022</p>
                </div>
                <div class="read-more">
                  <button class="arrow-btn">
                    <img src="@/assets/img/left-arrow.svg" alt="Next" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="articles">
          <div class="articles-content">
            <h2>Статьи & Новости</h2>
            <!-- Категории -->
            <div class="categories">
              <button @click="setCurrentCategory('All')">Все</button>
              <button @click="setCurrentCategory('Дизайн Кухни')">Дизайн Кухни</button>
              <button @click="setCurrentCategory('Дизайн Для Жизни')">Дизайн Для Жизни</button>
              <button @click="setCurrentCategory('Дизайн Интерьера')">Дизайн Интерьера</button>
            </div>
            <!-- Проекты -->
            <div class="article-grid">
              <div v-for="article in filteredArticles" :key="article.id" class="article">
                <img :src="require(`@/${article.img}`)" :alt="article.title" />
                <div class="tag">{{ article.tag }}</div>
                <h3>{{ article.title }}</h3>
                <p>{{ article.date }}</p>
                <button class="arrow-btn">
                  <img src="@/assets/img/left-arrow.svg" alt="Next" />
                </button>
              </div>
            </div>
            <div class="ellipses">
              <!-- Эллипсы для навигации -->
              <div class="ellipse" style="background: rgb(244, 240, 236);">01</div>
              <div class="ellipse" style="box-sizing: border-box; border: 1px solid rgb(205, 162, 116);">02</div>
              <div class="ellipse" style="box-sizing: border-box; border: 1px solid rgb(205, 162, 116);">03</div>
              <div class="ellipse" style="box-sizing: border-box; border: 1px solid rgb(205, 162, 116);">
                <div class="arrow-btn">
                  <img src="@/assets/img/left-arrow.svg" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Использование компонента ProductDetails -->
        <section class="product-details">
          <ProductDetails />
        </section>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import ProductDetails from './ProductDetails.vue';

export default {
  name: 'ProjectPage',
  components: {
    AppHeader,
    AppFooter,
    ProductDetails,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          img: "assets/img/article1.png",
          tag: "Дизайн Кухни",
          title: "Создадим лучший макет перепланировки",
          date: "26 Декабрь 2022"
        },
        {
          id: 2,
          img: "assets/img/article2.png",
          tag: "Дизайн Для Жизни",
          title: "Лучшие интерьерные идеи по низкой цене",
          date: "22 Декабрь 2022"
        },
        {
          id: 3,
          img: "assets/img/article3.png",
          tag: "Дизайн Интерьера",
          title: "Лучшие интерьерные решения для офисов",
          date: "25 Декабрь 2022"
        }
      ],
      currentCategory: 'All'
    };
  },
  computed: {
    filteredArticles() {
      if (this.currentCategory === 'All') {
        return this.articles;
      } else {
        return this.articles.filter(article => article.tag === this.currentCategory);
      }
    }
  },
  methods: {
    setCurrentCategory(category) {
      this.currentCategory = category;
    }
  }
};
</script>

<style>
@import '@/assets/style.css';
</style>