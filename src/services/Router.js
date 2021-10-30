
import Chat from '../screens/Chat.vue';
import Login from '../screens/Login.vue';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '',
        name: "Login",
        component: Login
    },
    {
        path: '/Chat',
        name: "Chat",
        component: Chat
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router