import { createRouter, createWebHistory } from 'vue-router';
import { authRoutes } from '../modules/auth/router';
import { mainRoutes } from '@/modules/mainList/router';

const routes = [
  ...authRoutes,
  ...mainRoutes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;