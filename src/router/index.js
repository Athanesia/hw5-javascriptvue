import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Blog from '@/components/Blog.vue';
import Project from '@/components/Project.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: Blog
  },
  {
    path: '/project',
    name: 'ProjectPage',
    component: Project
  }
];

const router = new VueRouter({
  mode: 'history', // используем HTML5 History API для чистых URL
  base: process.env.BASE_URL, // базовый путь приложения, берется из переменной окружения BASE_URL
  routes // массив маршрутов, определенных выше
});

export default router;