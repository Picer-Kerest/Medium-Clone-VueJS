import mutations from "@/store/mutations";
import authApi from "@/api/auth";
import { setItem } from "@/helpers/persistanceStorage";

const {
    REGISTER_START,
    REGISTER_FAILED,
    REGISTER_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} = mutations;

const authStore = {
    namespaced: true,
    state: {
        isSubmitting: false,
        currentUser: null,
        validationErrors: null,
        isLoggedIn: null
    },
    getters: {
        isSubmitting: ({ isSubmitting }) => isSubmitting,
        currentUser: ({ currentUser }) => currentUser,
        validationErrors: ({ validationErrors }) => validationErrors,
        isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    },
    mutations: {
        [REGISTER_START](state) {
            state.isSubmitting = true;
            state.validationErrors = null;
        },
        [REGISTER_SUCCESS](state, payload) {
            state.isSubmitting = false;
            state.currentUser = payload;
            state.isLoggedIn = true;
        },
        [REGISTER_FAILED](state, payload) {
            state.isSubmitting = false;
            state.validationErrors = payload;
        },
        [LOGIN_START](state) {
            state.isSubmitting = true;
            state.validationErrors = null;
        },
        [LOGIN_SUCCESS](state, payload) {
            state.isSubmitting = false;
            state.currentUser = payload;
            state.isLoggedIn = true;
        },
        [LOGIN_FAILED](state, payload) {
            state.isSubmitting = false;
            state.validationErrors = payload;
        },
    },
    actions: {
        register({ commit }, credentials) {
            // axios возвращает Promise, поэтому then
            return new Promise((resolve) => {
                commit(REGISTER_START);
                authApi.register(credentials)
                .then(response => {
                    commit(REGISTER_SUCCESS, response.data.user);
                    setItem('accessToken', response.data.user.token);
                    resolve(response.data.user);
                }).catch(result => {
                    commit(REGISTER_FAILED, result.response.data.errors);
                })
            })
        },
        login({ commit }, credentials) {
            return new Promise((resolve) => {
                commit(LOGIN_START);
                authApi.login(credentials)
                    .then(response => {
                        commit(LOGIN_SUCCESS, response.data.user);
                        setItem('accessToken', response.data.user.token);
                        resolve(response.data.user);
                    }).catch(result => {
                    commit(LOGIN_FAILED, result.response.data.errors);
                })
            })
        }
    }
}

export default authStore;