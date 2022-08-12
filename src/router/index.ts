import { createRouter, createWebHashHistory } from 'vue-router';

const ChatPage = () => import('../views/ChatPage.vue');
const FriendsPage = () => import('../views/FriendsPage.vue');
const HomePage = () => import('../views/HomePage.vue');

const routes = [
  {
    path: '/',
    name: 'chat',
    component: ChatPage,
    meta: {
      url: '/',
      title: '聊天',
    },
  },
  {
    path: '/friends',
    name: 'friends',
    component: FriendsPage,
    meta: {
      url: '/friends',
      title: '好友',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta: {
      url: '/home',
      title: '我的',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
