import mutations from "@/store/mutations";
import articleApi from "@/api/article"

const {
    CREATE_ARTICLE_START,
    CREATE_ARTICLE_SUCCESS,
    CREATE_ARTICLE_FAILED,
} = mutations;

const createArticleStore = {
    namespaced: true,
    state: {
        isSubmitting: false,
        validationErrors: null,
    },
    getters: {
        isSubmitting: ({ isSubmitting }) => isSubmitting,
        validationErrors: ({ validationErrors }) => validationErrors,
    },
    mutations: {
        [CREATE_ARTICLE_START](state) {
            state.isSubmitting = true;
        },
        [CREATE_ARTICLE_SUCCESS](state) {
            state.isSubmitting = false;
        },
        [CREATE_ARTICLE_FAILED](state, payload) {
            state.isSubmitting = false;
            state.validationErrors = payload;
        }
    },
    actions: {
        createNewArticle({ commit }, { articleInput }) {
            return new Promise((resolve) => {
                commit(CREATE_ARTICLE_START);
                articleApi.createArticle(articleInput)
                    .then(response => {
                        commit(CREATE_ARTICLE_SUCCESS);
                        resolve(response.data.article);
                    }).catch(result => {
                    commit(CREATE_ARTICLE_FAILED, result.response.data.errors);
                })
            })
        },
    }
}

export default createArticleStore;