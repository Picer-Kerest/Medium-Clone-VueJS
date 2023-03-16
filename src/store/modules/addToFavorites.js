import mutations from "@/store/mutations";
import addToFavoritesApi from "@/api/addToFavorites";

const {
    ADD_TO_FAVORITE_START,
    ADD_TO_FAVORITE_SUCCESS,
    ADD_TO_FAVORITE_FAILED
} = mutations;

const favoritesStore = {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {
        [ADD_TO_FAVORITE_START]() {},
        [ADD_TO_FAVORITE_SUCCESS]() {},
        [ADD_TO_FAVORITE_FAILED]() {},
    },
    actions: {
        addToFavorite({ commit }, { slug, isFavorite }) {
            return new Promise(resolve => {
                commit(ADD_TO_FAVORITE_START)
                const promise = isFavorite
                    ? addToFavoritesApi.removeFromFavorite(slug)
                    : addToFavoritesApi.addToFavorite(slug)
                promise.then(response => {
                    commit(ADD_TO_FAVORITE_SUCCESS)
                    resolve(response.data.article)
                }).catch(() => {
                    commit(ADD_TO_FAVORITE_FAILED)
                })
            })
        }
    }
}

export default favoritesStore;