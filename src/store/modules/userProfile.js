import mutations from "@/store/mutations";
import userProfileApi from "@/api/userProfile";

const {
    GET_USER_PROFILE_START,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILED,
} = mutations;

const profileStore = {
    namespaced: true,
    state: {
        data: null,
        isLoading: false,
        error: null
    },
    getters: {
        profileData: ({ data }) => data,
        isLoading: ({ isLoading }) => isLoading,
        error: ({ error }) => error
    },
    mutations: {
        [GET_USER_PROFILE_START](state) {
            state.isLoading = true
            state.data = null
        },
        [GET_USER_PROFILE_SUCCESS](state, payload) {
            state.isLoading = false
            state.data = payload
        },
        [GET_USER_PROFILE_FAILED](state) {
            state.isLoading = false
        },
    },
    actions: {
        getUserProfile({ commit }, { slug }) {
            return new Promise(resolve => {
                commit(GET_USER_PROFILE_START)
                userProfileApi.getUserProfile(slug)
                    .then(response => {
                    commit(GET_USER_PROFILE_SUCCESS, response.data.profile)
                    resolve(response.data.profile)
                }).catch(() => {
                    commit(GET_USER_PROFILE_FAILED)
                })
            })
        }
    }
}

export default profileStore;