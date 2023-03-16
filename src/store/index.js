import { createStore } from 'vuex';
import auth from './modules/auth';
import feed from './modules/feed'
import popularTags from './modules/popularTags'
import article from './modules/article'
import createArticle from './modules/createArticle'
import updateArticle from './modules/editArticle'
import favorites from './modules/addToFavorites'
import profile from './modules/userProfile'

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    popularTags,
    article,
    createArticle,
    updateArticle,
    favorites,
    profile
  }
})


export default store;


store.dispatch('initUserToken');
