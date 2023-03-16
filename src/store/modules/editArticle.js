import mutations from "@/store/mutations";
import articleApi from "@/api/article"

const {
    UPDATE_ARTICLE_START,
    UPDATE_ARTICLE_SUCCESS,
    UPDATE_ARTICLE_FAILED,
    GET_ARTICLE_START,
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_FAILED,
} = mutations;

const updateArticleStore = {
    namespaced: true,
    state: {
        isSubmitting: false,
        validationErrors: null,
        isLoading: false,
        article: null,
    },
    getters: {
        isSubmitting: ({ isSubmitting }) => isSubmitting,
        validationErrors: ({ validationErrors }) => validationErrors,
        isLoading: ({ isLoading }) => isLoading,
        article: ({ article }) => article
    },
    mutations: {
        [UPDATE_ARTICLE_START](state) {
            state.isSubmitting = true;
        },
        [UPDATE_ARTICLE_SUCCESS](state) {
            state.isSubmitting = false;
        },
        [UPDATE_ARTICLE_FAILED](state, payload) {
            state.isSubmitting = false;
            state.validationErrors = payload;
        },
        [GET_ARTICLE_START](state) {
            state.isLoading = true
        },
        [GET_ARTICLE_SUCCESS](state, payload) {
            state.isLoading = false
            state.article = payload
        },
        [GET_ARTICLE_FAILED](state) {
            state.isLoading = false
        },
    },
    actions: {
        updateUArticle({ commit }, { slug, articleInput }) {
            return new Promise(resolve => {
                commit(UPDATE_ARTICLE_START);
                articleApi.updateArticle(slug, articleInput)
                    .then(response => {
                        commit(UPDATE_ARTICLE_SUCCESS);
                        resolve(response.data.article);
                    }).catch(result => {
                    commit(UPDATE_ARTICLE_FAILED, result.response.data.errors);
                })
            })
        },
        getUArticle({ commit }, { slug }) {
            return new Promise(resolve => {
                commit(GET_ARTICLE_START);
                articleApi.getArticle(slug)
                    .then(response => {
                        commit(GET_ARTICLE_SUCCESS, response.data.article);
                        resolve(response.data.article);
                    }).catch(() => {
                    commit(GET_ARTICLE_FAILED);
                })
            })
        },
    }
}

export default updateArticleStore;