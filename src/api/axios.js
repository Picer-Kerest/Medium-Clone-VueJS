import axios from "axios"
import interceptors from './interceptors';

const instance = axios.create({
    // baseURL: 'https://conduit.productionready.io/api'
    baseURL: 'https://api.realworld.io/api'
})

interceptors(instance);

export default instance;



