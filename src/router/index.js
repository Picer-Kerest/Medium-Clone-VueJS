import { createRouter, createWebHashHistory } from 'vue-router'
import Register from "@/views/Register"
import Login from "@/views/Login";
import GlobalFeed from "@/views/GlobalFeed";
import YourFeed from "@/views/YourFeed";
import TagFeed from "@/views/TagFeed";
import Article from "@/views/Article";
import CreateArticle from "@/views/CreateArticle";

const routes = [
  {path: '/', name: 'home', component: GlobalFeed},
  {path: '/register', name: 'register', component: Register},
  {path: '/login', name: 'login', component: Login},
  {path: '/feed', name: 'yourFeed', component: YourFeed},
  {path: '/tags/:slug', name: 'tag', component: TagFeed},
  {path: '/article/new', name: 'createArticle', component: CreateArticle},
  {path: '/article/:slug', name: 'article', component: Article},
  {path: '/article/:slug/edit', name: 'editArticle', component: Login},
  {path: '/settings', name: 'settings', component: Login},
  {path: '/profiles/:slug', name: 'userProfile', component: Login},
  {path: '/profiles/:slug/favorites', name: 'userProfileFavorites', component: Login},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
