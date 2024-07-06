<template>
  <div>
    <AppHeader />
    <div class="container">
      <section class="banner">
        <img src="img/Banner_upper.jpg" alt="banner" />
      </section>
      <main>
        <section class="blog-content">
          <div class="blog-post">
            <h1>Создадим лучший макет перепланировки</h1>
            <img src="img/Photo.png" alt="Article Image" />
            <div class="post-meta">
              <span class="meta-left">26 Декабрь, 2022</span>
              <span class="meta-right">Интерьер / Домой / Декор</span>
            </div>
            <div class="post-content" v-if="currentTab === 'Kitchen'">
              <p>
                В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
              </p>
            </div>
            <div class="post-content" v-else-if="currentTab === 'Bedroom'">
              <p>Текст для тега "Спальня"...</p>
            </div>
            <div class="post-content" v-else-if="currentTab === 'Building'">
              <p>Текст для тега "Здание"...</p>
            </div>
            <div class="post-content" v-else-if="currentTab === 'Architecture'">
              <p>Текст для тега "Архитектура"...</p>
            </div>
            <div class="post-content" v-else-if="currentTab === 'Kitchen-Planning'">
              <p>Текст для тега "Планировка кухни"...</p>
            </div>
            <div class="quote">
              <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z" fill="#CDA274" />
              </svg>
              <p>Какая-то умная и красивая цитата</p>
            </div>
            <div class="post-content" v-if="currentTab === 'Kitchen' || currentTab === 'Kitchen-Planning'">
              <h2>Design sprints are great</h2>
              <p>
                В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»
              </p>
              <ul>
                <li><span class="custom-number">1</span>С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.</li>
                <li><span class="custom-number">2</span>С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.</li>
                <li><span class="custom-number">3</span>С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.</li>
              </ul>
              <img src="img/Photobottom.png" alt="Kitchen Image" />
              <p>
                В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.
              </p>
            </div>
          </div>
          <div class="tags">
            <div class="tags_head">Теги:</div>
            <div class="tags-list">
              <div class="tag-column">
                <button class="tag" @click="currentTab = 'Kitchen'">Кухня</button>
                <button class="tag" @click="currentTab = 'Building'">Здание</button>
                <button class="tag" @click="currentTab = 'Kitchen-Planning'">Планировка</button>
              </div>
              <div class="tag-column">
                <button class="tag" @click="currentTab = 'Bedroom'">Спальня</button>
                <button class="tag" @click="currentTab = 'Architecture'">Архитектура</button>
                <button class="tag" @click="currentTab = 'Bedroom'">Спальня</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  name: 'BlogPage',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      currentTab: 'Kitchen'
    };
  }
}
</script>

<style>
@import '@/assets/style.css';
</style>