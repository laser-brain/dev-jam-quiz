import { createWebHistory, createRouter } from 'vue-router';
import CategorySelection from '@/views/CategorySelection.vue';
import Quiz from '@/views/Quiz.vue';

const routes = [
  {
    path: '/',
    name: 'CategorySelection',
    component: CategorySelection,
  },
  {
    path: '/quiz/:categoryId',
    name: 'Quiz',
    component: Quiz,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
