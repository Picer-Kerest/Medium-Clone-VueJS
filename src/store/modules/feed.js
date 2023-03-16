import mutations from "@/store/mutations"
import feedApi from "@/api/feed"


const {
    GET_FEED_START,
    GET_FEED_SUCCESS,
    GET_FEED_FAILED
} = mutations

const feedStore = {
    namespaced: true,
    state: {
        data: null,
        isLoading: false,
        error: null
    },
    getters: {
        feedData: ({ data }) => data,
        isLoading: ({ isLoading }) => isLoading,
        error: ({ error }) => error,
    },
    mutations: {
        [GET_FEED_START](state) {
            state.isLoading = true
            state.data = null
        },
        [GET_FEED_SUCCESS](state, payload) {
            state.isLoading = false
            state.data = payload
        },
        [GET_FEED_FAILED](state) {
            state.isLoading = false
        },
    },
    actions: {
        getFeed({ commit }, { apiUrl }) {
            return new Promise(resolve => {
                commit(GET_FEED_START)
                feedApi.getFeed(apiUrl)
                    .then(response => {
                        commit(GET_FEED_SUCCESS, response.data)
                        resolve(response.data)
                    })
                    .catch(() => {
                        commit(GET_FEED_FAILED)
                    })
            })
        }
    }
}

export default feedStore
