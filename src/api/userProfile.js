import axios from "@/api/axios"


const getUserProfile = slug => {
    return axios.get(`/profiles/${slug}`)
}

export default {
    getUserProfile
}
