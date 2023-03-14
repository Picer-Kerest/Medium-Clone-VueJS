import axios from "@/api/axios";

const getArticle = slug => {
    return axios.get(`/articles/${slug}`)
}

export default {
    getArticle
}