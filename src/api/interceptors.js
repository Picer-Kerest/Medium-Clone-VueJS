import {getItem} from "@/helpers/persistanceStorage";

function setToken(config) {
    const token = getItem('accessToken')
    const authorizationToken = token ? `Token ${token}` : ''
    config.headers.Authorization = authorizationToken
    // Добавляем токен в Headers
    return config
}

export default function (axios) {
    axios.interceptors.request.use(setToken);
}