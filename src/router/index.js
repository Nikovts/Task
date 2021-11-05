import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardPage from '../views/DashboardPage.vue';
import StaticTaskPreviewPage from '../views/StaticTaskPreviewPage.vue';
import LibraryPage from '../views/LibraryPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'DashboardPage',
    component: DashboardPage,
  },
  {
    path: '/static-task-preview',
    name: 'StaticTaskPreviewPage',
    component: StaticTaskPreviewPage,
  },
  {
    path: '/library',
    name: 'LibraryPage',
    component: LibraryPage,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
