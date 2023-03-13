import mutations from "@/store/mutations";
import PopularTagsApi from "@/api/PopularTags"

const {
    GET_TAGS_START,
    GET_TAGS_SUCCESS,
    GET_TAGS_FAILED
} = mutations;

const popularTagsStore = {
    namespaced: true,
    state: {
        data: null,
        isLoading: false,
        error: null
    },
    getters: {
        tags: ({ data }) => data,
        isLoading: ({ isLoading }) => isLoading,
        error: ({ error }) => error,
    },
    mutations: {
        [GET_TAGS_START](state) {
            state.isLoading = true
            state.data = null
        },
        [GET_TAGS_SUCCESS](state, payload) {
            state.isLoading = false
            state.data = payload
        },
        [GET_TAGS_FAILED](state) {
            state.isLoading = false
        },
    },
    actions: {
        getFeed({ commit }) {
            return new Promise(resolve => {
                commit(GET_TAGS_START)
                PopularTagsApi.getPopularTags()
                    .then(response => {
                        commit(GET_TAGS_SUCCESS, response)
                        resolve(response)
                    })
                    .catch(() => {
                        commit(GET_TAGS_FAILED)
                    })
            })
        }
    }
}

export default popularTagsStore;