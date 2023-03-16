import axios from "@/api/axios"

const addToFavorite = slug => {
    return axios.post(`/articles/${slug}/favorite`)
}

const removeFromFavorite = slug => {
    return axios.delete(`/articles/${slug}/favorite`)
}

export default {
    addToFavorite,
    removeFromFavorite
}