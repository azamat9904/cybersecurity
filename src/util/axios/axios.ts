import axios from 'axios';

const instance = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1"
})

instance.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['key'] = 'AIzaSyB5vNXdZtqJILwvYh-9ZaqWVJvHf9wXklQ';
    return config;
});

export default instance;