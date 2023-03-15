import axios from "@/api/axios";

const getArticle = slug => {
    return axios.get(`/articles/${slug}`)
}

const deleteArticle = slug => {
    return axios.delete(`/articles/${slug}`)
}

const createArticle = articleInput => {
    return axios.post('/articles', { article: articleInput })
}

export default {
    getArticle,
    deleteArticle,
    createArticle
}