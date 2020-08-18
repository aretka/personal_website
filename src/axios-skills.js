import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://personal-website-fcdc7.firebaseio.com/'
})

export default instance;