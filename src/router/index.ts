import { createRouter, createWebHashHistory } from 'vue-router';

const LayoutView = () => import('../layout/LayoutView.vue');
const LoginPage = () => import('../views/LoginPage.vue');
const ChatPage = () => import('../views/ChatPage.vue');
const SessionPage = () => import('../views/SessionPage.vue');
const FriendsPage = () => import('../views/FriendsPage.vue');
const HomePage = () => import('../views/HomePage.vue');

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
    meta: {
      url: '/',
      title: '登录',
    },
  },
  {
    path: '/main',
    name: 'main',
    component: LayoutView,
    children: [
      {
        path: 'chat',
        name: 'chat',
        component: ChatPage,
        meta: {
          url: '/chat',
          title: '聊天',
        },
      },
      {
        path: 'friends',
        name: 'friends',
        component: FriendsPage,
        meta: {
          url: '/friends',
          title: '好友',
        },
      },
      {
        path: 'home',
        name: 'home',
        component: HomePage,
        meta: {
          url: '/home',
          title: '我的',
        },
      },
    ],
  },
  {
    path: '/session',
    name: 'session',
    component: SessionPage,
    meta: {
      url: '/session',
      title: '会话',
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
