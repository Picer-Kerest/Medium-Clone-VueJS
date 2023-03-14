import mutations from "@/store/mutations";
import articleApi from "@/api/article"

const {
    GET_ARTICLE_START,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAILED
} = mutations;

const articleStore = {
    namespaced: true,
    state: {
        data: null,
        isLoading: false,
        error: null
    },
    getters: {
        articleData: ({ data }) => data,
        isLoading: ({ isLoading }) => isLoading,
        error: ({ error }) => error,
    },
    mutations: {
        [GET_ARTICLE_START](state) {
            state.isLoading = true
            state.data = null
        },
        [GET_ARTICLE_SUCCESS](state, payload) {
            state.isLoading = false
            state.data = payload
        },
        [GET_ARTICLE_FAILED](state) {
            state.isLoading = false
        },
    },
    actions: {
        getArticle({ commit }, { slug }) {
            return new Promise(resolve => {
                commit(GET_ARTICLE_START)
                articleApi.getArticle(slug)
                    .then(response => {
                        commit(GET_ARTICLE_SUCCESS, response.data.article)
                        resolve(response.data.article)
                    })
                    .catch(() => {
                        commit(GET_ARTICLE_FAILED)
                    })
            })
        }
    }
}

export default articleStore;