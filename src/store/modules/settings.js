import mutations from "@/store/mutations"


const {
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED
} = mutations

const settingsStore = {
    namespaced: true,
    state: {
        isSubmitting: false,
        validationErrors: null
    },
    getters: {
        isSubmittingSettings: ({ isSubmitting }) => isSubmitting,
        validationErrorsSettings: ({ validationErrors }) => validationErrors
    },
    mutations: {
        [UPDATE_USER_START](state) {
            state.isSubmitting = true
            state.validationErrors = null
        },
        [UPDATE_USER_SUCCESS](state) {
            state.isSubmitting = false
        },
        [UPDATE_USER_FAILED](state, payload) {
            state.isSubmitting = false
            state.validationErrors = payload
        },
    }
}

export default settingsStore
